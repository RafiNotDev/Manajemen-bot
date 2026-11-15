let rafiganteng = async ( m, { conn, text, args }) => {
if (!m.quoted) return replyt('Reply Pesan Member Yang Akan Di Tambahin Exp Nya')
if (!text) return replyt('Mau Nambah Berapa Exp')
if (!nomor(text)) return replyt('Masukan Harus Berupa Angka')
let users = global.db.data.users
    users[m.quoted.sender].exp += nomor(text)
    conn.reply(m.chat, `Sukses Menambah Exp @${m.quoted.sender.split('@')[0]} Sebesar ${text}`, m)
}
rafiganteng.help = rafiganteng.command = ['addexp']
rafiganteng.tags = ['owner']
rafiganteng.owner = true

export default rafiganteng