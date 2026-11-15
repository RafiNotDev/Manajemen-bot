import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let azan = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
await replymusik(azan)
}
handler.customPrefix = /^(adzan|azan|azan oi|adzan oi|azan woi|adzan woi|)$/i
handler.command = new RegExp
export default handler