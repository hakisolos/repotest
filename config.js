//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEoxZlhqeXJGeml6Qm1pcENPSlhlaEtEdWFJSmZlRlpYdHl2dDIvdU0yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdYQkRKL0lWSWp1VlJnVnZuVWpZUUZnaEowVTFOL3VTOHg5MXovc2xoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUGxMQXVBYXpkdXFLd09kZG5zSlVTdDVhVG5hTUZrZkt3dUtLZm9WNTFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmSktLcFRXT2FDM3dYcUxEeGFaUUNTTzhqYjJQd3pEMy9nR1RZaUZBempRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDV1JuQmhqWVhiWXNhV0FiRVh0MFdQVzg2a05TdHZkN3VIUmpFM0taMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBVY3JTTEg5RFExSlg1Z1NFZTRwL0puUkdvLzV4bXlXZDRmTEUxWFhzbmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNoNzlsbktYUFJTRlpucEpKaDh1WVJBMzhGSWRyMDRiUEgzY0hLMmdGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlYwRDNMOGxXSCtQS0dsSEtIQW5MWVpHbmxlM1d3R0xWdFJqcWhXYkdEMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNiTnR0enJtQVkrdGNYOGptbkFLSVB6Z0VQc0NDVElyazNKVHJuc0FiYmtma0tXQWU0QlpKQXl4a2s3MFMwZWdCWU9LdXNhb3FhQ0p4aEUwZlVhT2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJtNmpWWHllUjdWbUpLaGVZaElqRUFwc2tYckNmY3ZtZ3NuMmtBTXcvczNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJreGtoaGhNNVJQaXJjRERBX2dNOXJnIiwicGhvbmVJZCI6ImUwZTJiMzg1LTVhM2MtNGY3ZC1hODE2LTg2Yjc1MWQ0Y2U4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqRzBCV3piRnpCVzdhRXFOQ0FveExQUG1IQ2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDRaTE4veUJtbHd4ZGd5VUd5Mno3NVA0VWh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldKUURMQllUIiwibWUiOnsiaWQiOiIyMzQ5MTIxMDAzNTYzOjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKT1VnOXdCRUwvL3NMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJROEk5NUtWVkJCTmJ3a2hVeHQ4QTUzMVJtK2w3dUZMUDh6WS9Hbnc3ZEFFPSIsImFjY291bnRTaWduYXR1cmUiOiIyR0RkK3BsTS9JRmNKVklHazBMY0RyUjdWU1UzY1VzMzlFWTNkNnJ3bWVQOE1kRHArSjZ1MU1MTzVNTFJpQUswdUZZUlZ0cDRpckdxeG4xWEl2aTlBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicVZ1WmE0bW52Vk1LWFpHZHRmUTBqMys1eFBMNlErMGM0WTM4ZkFCeC9jQWJUS1JnWFErcDNrUnh1U3hlR1VYTVd5NE1OY25QbkhVSGhoOGZOdVRHZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIxMDAzNTYzOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVQQ1BlU2xWUVFUVzhKSVZNYmZBT2Q5VVp2cGU3aFN6L00yUHhwOE8zUUIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY3NTg4NjF9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
