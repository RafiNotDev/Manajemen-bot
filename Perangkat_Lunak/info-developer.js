let handler = async (m, { conn, text, usedPrefix, command }) => {
  let name = await conn.getName(m.sender)
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let tulisan = `
            *I N F O  D E V E L O P E R* 

                  Peringatan
       <==================>
- jangan spam developer, ketahuan block
- jangan call developer kalo kagak penting`
try {
  //await conn.sendMessage(m.chat, { text : tulisan}, { quoted: fkon })
  conn.sendMessage(m.chat, {
  text: tulisan,
  footer: "Klik Tombol Di Bawah Ini",
  interactiveButtons: [
    { name: 'cta_url', buttonParamsJson: JSON.stringify({ display_text: 'CHAT DEVELOPER', url: `https://wa.me/${developer.nomor}` }) },
    { name: 'cta_url', buttonParamsJson: JSON.stringify({ display_text: 'INSTAGRAM DEVELOPER', url: `${developer.instagram}` }) },
    { name: 'cta_url', buttonParamsJson: JSON.stringify({ display_text: 'TIKTOK DEVELOPER', url: `${developer.tiktok}` }) }
  ], contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                },
               }, {quoted: fkon})
} finally { 
       replymusik("https://files.catbox.moe/vc6f9a.mp3")
}
}
handler.help = ['developer']
handler.tags = ['info']

handler.command = /^(dev|developer)$/i

export default handler