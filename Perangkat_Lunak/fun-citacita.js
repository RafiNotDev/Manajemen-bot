import fetch from 'node-fetch'

let handler = async (m, {
    conn,
    command
}) => {
    let res = await fetch('https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json')
    let json = await res.json()
    await replymusik(json.getRandom)
}
handler.help = ['citacita']
handler.tags = ['fun']
handler.command = /^(citacita)$/i

export default handler