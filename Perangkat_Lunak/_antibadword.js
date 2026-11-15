let badwordRegex = /anjing|babi|asu|memek|pepek|colmek|coli|ngentot|ngocok|kontol|unggeh|asyu|mmk|kntol|entod|pantek|ptk/i
export async function before(m, { conn, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    let toxic = `${user.warning >= 4 ? `*PERINGATAN!!*\nKarna Kak @${m.sender.split("@")[0]} Sudah Melebihi Maksimal Peringatan\n@${setting.bot} Akan Kick Kakak` : `*PERINGATAN!!*\n Kak @${m.sender.split("@")[0]} Berkata Toxic\n@${setting.bot} Kasih Peringatan ${user.warn}/5\nLebih Dari Lima @${setting.bot} Bakal Kick Kak @${m.sender.split("@")[0]}\n\n“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`}`
    if (chat.antiBadword && isBadword && m.isGroup) {
        user.warn += 1
        replyt(toxic)
        if (user.warn >= 5) {
            user.warn = 0
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}