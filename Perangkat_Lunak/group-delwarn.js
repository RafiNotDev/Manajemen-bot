let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `💠 Memberi label atau menyebut seseorang`
        if (!(who in global.db.data.users)) throw `💠 Pengguna tidak ada di database`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         replyt(`⚠️ *PERINGATAN*
         
▢ Memperingatkan: *-1*
▢ Total Memperingatkan: *${warn - 1}*`)
         } else if (warn == 0) {
            replyt('💠 Pengguna tidak memiliki peringatan')
        }

}
handler.help = ['delwarning @user']
handler.tags = ['group','owner']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler