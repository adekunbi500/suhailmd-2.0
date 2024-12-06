const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166698122";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_29_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidVJPNTl6SWo4bTVuQnNORXR3OEFkZFRMNmJ6Z0lTUWMzOTVpV3c0Y21FQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY2Njk4MTIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOEZBRTlGQTA4NkJERTE3MkVCMDg4REQxOUMwMDM1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM0NTU3NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVBQaXQtTnhRSE81ZGM5T2NpNHk1Z1wiLFxuICBcInBob25lSWRcIjogXCJkYjdiNWZhMi0yNGQwLTRkNGQtYTE1NS02YjU3YTBiNThhMjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAzOSxcbiAgICAgIDIzNSxcbiAgICAgIDE1NCxcbiAgICAgIDE5MSxcbiAgICAgIDI0LFxuICAgICAgOSxcbiAgICAgIDE3OSxcbiAgICAgIDEyOSxcbiAgICAgIDUxLFxuICAgICAgMTkwLFxuICAgICAgMTk4LFxuICAgICAgMjQ5LFxuICAgICAgMTU4LFxuICAgICAgMTM0LFxuICAgICAgMSxcbiAgICAgIDg2LFxuICAgICAgMTAyLFxuICAgICAgMTU3LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDI0OSxcbiAgICAgIDUwLFxuICAgICAgMTYzLFxuICAgICAgMTQ0LFxuICAgICAgMTgyLFxuICAgICAgMTUzLFxuICAgICAgMjAzLFxuICAgICAgNzAsXG4gICAgICAzMCxcbiAgICAgIDExMixcbiAgICAgIDE4MixcbiAgICAgIDE2MixcbiAgICAgIDEwNCxcbiAgICAgIDM2LFxuICAgICAgNjQsXG4gICAgICAxODksXG4gICAgICA2LFxuICAgICAgMjQxLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1dFWFdTUlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjY2OTgxMjI6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLDg0xQSMOFXCIsXG4gICAgXCJsaWRcIjogXCI2OTkzOTU2NjIzNTc2OTo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdUppTFFERVAvZXlib0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpjVDhwV2dUSDduYWdHYUpkWVlSRTlVMkk2RzdRTjlMQmd2UzVTakJoMmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSnNrT0J5S3c5R1l4eS9PNmFoY2kzQXJzdm0xaUw1MHNsb1dqcU9VanpoUTU5MFNxeVJETkxnUVkrUkpKS2pPeGhOOFdweEFQSm1DRjJ1Y3Q0bytxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTDJqWXgwaFN6WWNjeE0yTStmVXdPL3JMbWFwbi8zeDlzWFBUc0xSRGtjWFBsMTNoNndWdjhsbVBVazZLcEpGSWgzcVdlT29NWFZjTEdVVFQwMG5LQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NjY5ODEyMjo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQ1NTc0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9XVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1dWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2U4Y0dPYTM4YUFyRFVjRy8vZGdNQnpqNUtueXlmcGdhZUdxNHZaUEpFRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTQ0OTA1MjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMzOTM5MTQzNjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
