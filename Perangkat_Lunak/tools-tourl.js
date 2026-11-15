
import axios from 'axios'

let handler = async (m, { conn }) => {
  let q = m.quoted

  if (!q)
    return rafitampilan(m.chat, 'Reply foto, lagu, video, atau dokumen!', m)

  const repoOwner = 'RafiNotDev'
  const repoName = 'DatabaseBot'
  const branch = 'main'

  // Simpan token GitHub di environment variable.
  const token = process.env.Token_Github || ""

  try {
    if (!token) throw new Error('GitHub token belum diatur!')

    await m.reply('⏳ Mengupload media ke GitHub...')

    let buffer = await q.download()

    if (!Buffer.isBuffer(buffer) || !buffer.length)
      throw new Error('Gagal mengunduh media!')

    // Ambil informasi media dari pesan yang di-reply
    let msg = q.msg || {}
    let mime = msg.mimetype || ''
    let originalName = msg.fileName || ''

    // Ambil ekstensi asli jika tersedia
    let ext = originalName.includes('.')
      ? originalName.split('.').pop().toLowerCase()
      : ''

    // Jika tidak ada nama file, deteksi dari MIME
    if (!ext) {
      const mimeExt = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp',
        'image/gif': 'gif',
        'image/heic': 'heic',
        'audio/ogg': 'mp3',
        'audio/mpeg': 'mp3',
        'audio/mp4': 'm4a',
        'audio/aac': 'aac',
        'audio/wav': 'wav',
        'video/mp4': 'mp4',
        'video/3gpp': '3gp',
        'video/webm': 'webm',
        'application/pdf': 'pdf',
        'application/zip': 'zip',
        'text/plain': 'txt'
      }

      ext = mimeExt[mime] || ''
    }

    // Deteksi berdasarkan tipe pesan WhatsApp
    if (!ext) {
      const types = {
        imageMessage: 'jpg',
        audioMessage: 'mp3',
        videoMessage: 'mp4',
        stickerMessage: 'webp'
      }

      ext = types[q.mtype] || 'bin'
    }

    // Pastikan ekstensi valid
    ext = ext.replace(/[^a-z0-9]/g, '') || 'bin'

    let fileName = `rafibot-${Date.now()}.${ext}`
    let filePath = `uploads/${Date.now()}-${fileName}`

    let api = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`

    await axios.put(api, {
      message: `Upload ${fileName}`,
      content: buffer.toString('base64'),
      branch
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json'
      }
    })

    let raw = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`

    await conn.sendMessage(m.chat, {
      text: `✅ *BERHASIL UPLOAD!*

📄 File: ${fileName}
📦 Tipe: ${mime || q.mtype}
📏 Ukuran: ${(buffer.length / 1024).toFixed(2)} KB

🔗 *LINK RAW:*
${raw}`
    }, { quoted: m })

  } catch (e) {
    console.error(e.response?.data || e)

    m.reply(`❌ Upload gagal!

${e.response?.data?.message || e.message}`)
  }
}

handler.help = ['upgithub']
handler.command = ['upgithub']
handler.tags = ['tools']

export default handler
