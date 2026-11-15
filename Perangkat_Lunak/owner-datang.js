import fetch from 'node-fetch'
let handler = async (m, {
    conn,
    usedPrefix,
    command,
    isROwner,
    isPembuat
}) => {
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
       if (isPembuat || isROwner) {
        replyt(`*Waduhh*, ${isPembuat ? `Developerku *${global.namadev}* Datang` : `Owner Utamaku *${setting.namaowner}* Datang`}, Ayo Tepuk Tangan Semua`)
        replymusik("https://files.catbox.moe/3gn224.mp3")
        }
}
handler.customPrefix = /^(hallo|cihuy|p)$/i
handler.command = new RegExp
export default handler