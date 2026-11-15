let war = 3
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `💠 Reply pesan pelaku dan kirim alasannya\n\n*Example:* ${usedPrefix}${command} Mengirim Video 18+`
        if (!(who in global.db.data.users)) throw `💠 Pengguna hilang dari database saya`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            conn.sendMessage(m.chat, {
            text: `
⚠️ *Pengguna yang Diperingatkan* ⚠️

▢ *Admin:* ${name}
▢ *Pengguna:* @${who.split`@`[0]}
▢ *Memperingatkan:* ${warn + 1}/${war}`}, { mentions: [who] }) 
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Pengguna melebihi peringatan *${war}* karena itu akan dihapus`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ Anda tersingkir dari grup *${groupMetadata.subject}* karena Anda telah diperingatkan *${war}* kali`, who)
        }
}
handler.help = ['warning @user']
handler.tags = ['group']
handler.command = ['warning','warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }