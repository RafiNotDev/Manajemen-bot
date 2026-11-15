let handler = async(m, { conn, text }) => {

  global.prefix = new RegExp('^[' + (opts['prefix'] || text).replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
    await replyt(`Prefix berhasil direset ke ${text}`)

}
handler.help = ['resetprefix']
handler.tags = ['owner']
handler.command = /^(resetprefix)$/i
handler.rowner = true

export default handler