const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const axios = require('axios');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
            var items = ["Safari"];
            function selectRandomItem(array) {
                var randomIndex = Math.floor(Math.random() * array.length);
                return array[randomIndex];
            }
            var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: state,
                printQRInTerminal: false,
                logger: pino({
                    level: "silent"
                }),
                browser: Browsers.macOS("Desktop"),
            });
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
                if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    
                    const randomText = generateRandomText();
                    try {
                        const base64Session = Buffer.from(data.toString()).toString('base64');
                        let md = "THARUZZ-OFC&" + base64Session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        
                        let cap = `
*\`ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ\` Session Connected ✅*

⚠️ *ᴅᴏɴᴛ ꜱʜᴀʀᴇ ᴛʜɪꜱ ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ.*

🚀 *ꜱʀɪ ʟᴀɴᴋᴀɴ ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ᴛʜᴀʀᴜꜱʜᴀ ꜱᴀɴᴅɪᴘᴀ.*

*───────────────*
🌟 *\`sᴛᴀʀ ʀᴇᴘᴏ:\`* https://github.com/tharusha-md2008
🔔 *\`ғᴏʟʟᴏᴡ ᴡᴀ-ᴄʜᴀɴɴᴇʟ:\`* https://whatsapp.com/channel/0029Vb9LTRHInlqISdCfln45
👤 *\`ᴏᴡɴᴇʀ ɴᴏ:\`* 94740326138
*───────────────*

> *© ᴘᴏᴡᴇʀᴅ ʙʏ | ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ*
`;
                    await sock.sendMessage(sock.user.id, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                title: "ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ",
                                thumbnailUrl: "https://raw.githubusercontent.com/tharusha-md777/THARUZZ-DETABASE/refs/heads/main/media/20250909_101450.jpg",
                                sourceUrl: "https://whatsapp.com/channel/0029Vb9LTRHInlqISdCfln45",
                                mediaType: 2,
                                renderLargerThumbnail: true,
                                showAdAttribution: true,
                            },
                        },
                    }, { quoted: code });
                    } catch (e) {
                        let ddd = await sock.sendMessage(sock.user.id, { text: e.toString() });
                       let cap = `
*\`ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ\` Session Connected ✅*

⚠️ *ᴅᴏɴᴛ ꜱʜᴀʀᴇ ᴛʜɪꜱ ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ.*

🚀 *ꜱʀɪ ʟᴀɴᴋᴀɴ ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ᴛʜᴀʀᴜꜱʜᴀ ꜱᴀɴᴅɪᴘᴀ.*

*───────────────*
🌟 *\`sᴛᴀʀ ʀᴇᴘᴏ:\`* https://github.com/tharusha-md2008
🔔 *\`ғᴏʟʟᴏᴡ ᴡᴀ-ᴄʜᴀɴɴᴇʟ:\`* https://whatsapp.com/channel/0029Vb9LTRHInlqISdCfln45
👤 *\`ᴏᴡɴᴇʀ ɴᴏ:\`* 94740326138
*───────────────*

> *© ᴘᴏᴡᴇʀᴅ ʙʏ | ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ*
`;
                    await sock.sendMessage(sock.user.id, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                title: "ᴛʜᴀʀᴜᴢᴢ ᴏꜰᴄ",
                                thumbnailUrl: "https://raw.githubusercontent.com/tharusha-md777/THARUZZ-DETABASE/refs/heads/main/media/20250909_101450.jpg",
                                sourceUrl: "https://whatsapp.com/channel/0029Vb9LTRHInlqISdCfln45",
                                mediaType: 2,
                                renderLargerThumbnail: true,
                                showAdAttribution: true,
                            },
                        },
                    }, { quoted: ddd });
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restarted", err);
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});

setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000);

module.exports = router;
