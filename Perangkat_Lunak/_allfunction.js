import axios from "axios"
import moment from "moment-timezone";
import * as baileys from "@adiwajshing/baileys";
const { generateWAMessageContent, generateWAMessageFromContent, proto } = baileys
import crypto from "crypto";
import { sticker } from "../Perangkat_Keras/Komponen/sticker.js"

let handler = (m) => m;
handler.before = async (m, { conn, text, args }) => {

           // Item Variabel Bot //

let imagepp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => setting.tampilan)   
let anu = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': conn.getName(m.sender), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${conn.getName(m.sender)},;;;\nFN:${conn.getName(m.sender)}\nitem1.TEL;waid=${m.sender}:${m.sender}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': imagepp, thumbnail: imagepp,sendEphemeral: true}}}
let button = [
  { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `SEMUA FITUR BOT`, id: `.allmenu` }) },
    { name: 'cta_url', buttonParamsJson: JSON.stringify({ display_text: 'CHAT OWNER', url: `https://wa.me/${setting.owner}` }) },
    { name: 'cta_url', buttonParamsJson: JSON.stringify({ display_text: 'CHAT DEVELOPER', url: `https://wa.me/${developer.nomor}` }) }
  ]

           // Bagian Function Bot //
function ReplyT(teks) {
let tampilan = global.db.data.settings[this.user.jid].tampilan

       if ( tampilan === "teks" ) {
return replyteks(teks)
} else if ( tampilan === "gambar" ) {
return replygambar(teks)
} else {
return replybutton(teks)
}
}

function ReplyM(teks) {
let menu = global.db.data.settings[this.user.jid].menu
       if ( menu === "teks" ) {
return replyteks(teks)
} else if ( menu === "gambar" ) {
return replygambar(teks)
} else {
return replybutton(teks)
}
}

function ReplyTeks(teks, jid = m.chat, quotedd = anu) {
return conn.sendMessage(jid, {
       text: teks,
       contextInfo: {
                mentionedJid: conn.parseMention(teks),
                forwardingScore: 9999999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                },
       }, { quoted: quotedd })
}

function ReplyGambar(teks, foto = setting.tampilan || imagepp, jid = m.chat, quotedd = anu) {
return conn.sendMessage(jid, {
       image: { url: foto },
       caption: teks,
       contextInfo: {
                mentionedJid: conn.parseMention(teks),
                forwardingScore: 9999999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                },
       }, { quoted: quotedd })
}

function ReplyButton(teks, button, jid = m.chat, quotedd = anu) {
return conn.sendMessage(jid, {
  text: teks,
  footer: setting.namabot,
  interactiveButtons: button, 
  contextInfo: {
                mentionedJid: conn.parseMention(teks),
                forwardingScore: 99999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                },
               }, { quoted: quotedd })
}

function ReplyMusik(link, jid = m.chat, quotedd = anu) {
    let userMusik = global.db.data.settings[conn.user.jid].musik
    if ( userMusik === "pesan suara" ) {
return conn.sendMessage(jid, { 
                audio: {url: link}, 
                mimetype: "audio/mpeg",
                ptt: true,
               }, { quoted: quotedd })
}
    if ( userMusik === "fake saluran") {
return conn.sendMessage(jid, { 
                audio: {url: link}, 
                mimetype: "audio/mpeg",
                ptt: true,
                contextInfo: {
mentionedJid: [m.sender], 
    forwardingScore: 99999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.setting.idch,
      serverMessageId: 103,
      newsletterName: global.setting.namach
    },
    }}, { quoted: quotedd })
}
return conn.sendMessage(jid, { 
                audio: {url: link}, 
                mimetype: "audio/mpeg",
                ptt: false,
               }, { quoted: quotedd })
}

async function Jadisticker(url) {
let response = await axios.get(url, { responseType: 'arraybuffer' })
      let Stiker = await sticker(response.data, false, stickpack, stickauth)
      conn.sendFile(m.chat, Stiker, 'hasil.webp', { asSticker: true }, m)
}
function Potopp(jid) {
conn.profilePictureUrl(jid, 'image').catch(_ => "https://files.catbox.moe/itl427.jpg")
}

async function Mentions(text) {
const participantss = (await conn.groupMetadata(m.chat)).participants
    let orang = null;
    if (m.quoted) return orang = m.quoted.sender
    if (!text) {
    orang = m.sender
    } else {
    const mentionedUser = text.match(/@([0-9]{7,16})/);  // Regex untuk menangkap mention ID
      const mentionedUserId = mentionedUser[1]
      orang = participantss.find(user => user.id.includes(mentionedUserId))?.jid
}
return orang
}

function ucpn() {
  const time = moment.tz("Asia/Jakarta").format("HH");
  let res = "Selamat Menjelang Pagi";
  if (time >= 4) {
    res = "Selamat Pagi";
  }
  if (time >= 10) {
    res = "Selamat Siang";
  }
  if (time >= 15) {
    res = "Selamat Sore";
  }
  if (time >= 18) {
    res = "Selamat Malam";
  }
  return res;
}

function Delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function groupStatus(sock, jid, content) {
    const inside = await generateWAMessageContent(content, {
        upload: sock.waUploadToServer
    })
    const messageSecret = crypto.randomBytes(32)
    const m = generateWAMessageFromContent(jid, {
        messageContextInfo: {
            messageSecret
        },
        groupStatusMessageV2: {
            message: {
                ...inside,
                messageContextInfo: {
                    messageSecret
                }
            }
        }
    }, {})
    await sock.relayMessage(jid, m.message, {
        messageId: m.key.id
    })
    return m
}

function Reaction(emoji, q = m.chat, quotedd = m.key) {
conn.sendMessage(q, {
            react: {
                text: emoji,
                key: quotedd
            }
        })
}
function Number(angka) {
const isNumber = angka => typeof angka === 'number' && !isNaN(angka)
}

     // Pengubah Function Jadi Global //
global.replyteks = ReplyTeks
global.replygambar = ReplyGambar
global.replymusik = ReplyMusik
global.replybutton = ReplyButton
global.replyt = global.replytampilan = ReplyT
global.replym = global.replymenu = ReplyM
global.jadisticker = await Jadisticker
global.fotopp = Potopp
global.react = Reaction
global.mention = Mentions
global.swgc = groupStatus
global.ucapan = ucpn
global.groub = m.chat
global.nomor = Number
global.delay = Delay
global.protoo = proto
global.sendd = generateWAMessageFromContent
}
export default handler