import { getContentType, generateWAMessage, generateWAMessageFromContent, generateWAMessageContent,prepareWAMessageMedia } from "@adiwajshing/baileys"

let handler = async (m, {conn, args, text, usedPrefix, command}) => {
const setmenu = global.db.data.settings[conn.user.jid].menu
const dick = `
┏┃ TYPE MENU ┃┓
┃╭───────────────┓
┃│⏣ • button
┃│⏣ • teks
┃│⏣ • gambar
┗╰───────────────┛`
let msg = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: dick,            
},
footer: {
text: "type Tampilan saat ini " + setmenu,
      },
 nativeFlowMessage: {
buttons: [         
             {
      "name": "single_select",
      "buttonParamsJson": `{
      "title": "select type",
             "sections":[{
                  "title":"select one of the menu views",
                   "rows":[
                      {"header":"Button","title":"","description":"tampilan menggunakan button","id":".set-menu button"},
                      {"header":"Teks","title":"","description":"tampilan menggunakan teks","id":".set-menu teks"},
                      {"header":"Gambar","title":"","description":"tampilan menggunakan Gambar","id":".set-menu gambar"}
             ]}]}`
       },
     ], },},
}, }, },{ quoted : m })

    if (!text) return conn.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }) 
    if (text === 'button', 'gambar', 'teks') {
    global.db.data.settings[conn.user.jid].menu = text;
    m.reply(`Menu berhasil di Alihkan Ke ${text}`);
    } else {
    return;
    }
}
handler.help = handler.command = ['set-menu']
handler.tags = ['owner']
handler.owner = true
export default handler