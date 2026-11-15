let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].money = 99999999999999999
        global.db.data.users[m.sender].diamond = 99999999999999999
        global.db.data.users[m.sender].exp = 9999999
        m.reply(`*Selamat Kamu Mendapatkan*:\n*money🤑:* 999999999999\n*Diamond💎:* 999999999999\n*Exp⭐:* 9999999`)
}
handler.tags = ['owner']
handler.help = ['cheat']
handler.command = /^(cheat)$/i
handler.premium = true

export default handler