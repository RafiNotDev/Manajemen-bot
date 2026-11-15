/**
 * to hitam dan lain lain
 * -----------------------------
 * Type   : Plugins ESM
 * creator : Hilman
 * Channel : https://whatsapp.com/channel/0029VbAYjQgKrWQulDTYcg2K
 Api : https://api-faa.my.id
 */
import axios from "axios"
import FormData from "form-data"
import fetch from "node-fetch"

let handler = async (m, { conn, command }) => {
  try {
    await react("✨")

    let q = m.quoted ? m.quoted : m
    let mime = q.mimetype || q.msg?.mimetype || ""

    if (!mime.startsWith("image/")) {
      let list = handler.help.map(v => `.${v}`).join("\n")
      return m.reply(
`✨ *AI IMAGE CONVERTER*

Reply gambar dengan caption salah satu command berikut:

${list}`
      )
    }

    let buffer = await q.download()
    if (!buffer) return m.reply("❌ Gagal mengambil gambar")

    let imageUrl = await uguu(buffer)
    if (!imageUrl) return m.reply("❌ Upload gambar gagal")

    let apiUrl = `https://api-faa.my.id/faa/${command}?url=${encodeURIComponent(imageUrl)}`
    let res = await fetch(apiUrl)

    if (!res.ok) return m.reply("❌ API error")

    let result = Buffer.from(await res.arrayBuffer())
    await conn.sendFile(m.chat, result, `${command}.jpg`, "", m)

  } catch {
    m.reply("❌ Terjadi kesalahan!")
  }
}

handler.help = [
  'tobotak','tochibi','tofunk',
  'tofigura','tofigurav2','tofigurav3','toghibli','tohijab',
  'tojapanese','tojepang','tokacamata','tokamboja','tolego',
  'toliquor','tomaid','tomirror','tomoai','tomonyet',
  'topacar','topeci','topiramida','toputih','toreal',
  'toroblox','toroh','totato','totua','toviking',
  'tozombie','tounderground','tohitam','tosexy'
]

handler.tags = ['maker']

handler.command = /^(tobotak|tochibi|tofunk|tofigura|tofigurav2|tofigurav3|toghibli|tohijab|tojapanese|tojepang|tokacamata|tokamboja|tolego|toliquor|tomaid|tomirror|tomoai|tomonyet|topacar|topeci|topiramida|toputih|toreal|toroblox|toroh|totato|totua|toviking|tozombie|tounderground|tohitam|tosexy)$/i

handler.limit = 5
export default handler


async function uguu(buffer) {
const repoOwner = 'RafiNotDev'
  const repoName = 'DatabaseBot'
  const branch = 'main'

  // Simpan token GitHub di environment variable.
  const token = process.env.Token_Github || ""

    if (!token) throw new Error('GitHub token belum diatur!')
    

    let fileName = `rafibot-${Date.now()}.jpg`
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
    
    return raw
}