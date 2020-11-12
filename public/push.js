var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BDe4X07qaaAoF1HuEO9UQvd-XPAiuS-MvmT7XDufZ9Q-PegaMiMuHI6sQg1pnk1GsexJbAtzfnaXcOFuq3zfCLM",
    "privateKey": "LXhA2RAvYoHs1j_whJpC_IWFFmd53aWn8kRW4AGwS_Y"
};
 
 
webPush.setVapidDetails(
    'mailto:oktapadita@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dTI_VST1LKY:APA91bHVK0RYtn2CCEtYjlagR39PfzU9-0bFFczSY3kHMtJQNOxOBW0bjh12dnLyvYOoQ27FwdjSSnuFiIGOMcdsn0dvJFkmPRYceG0iPLIM8w0O85RqR1m0uCfz0TyMVhp45R6bPGgs",
    "keys": {
        "p256dh": "BODnN3kUKTMTjlyQ0WhmVytLvP96lmf06qgvrNm6QAMqTHjKnAtFR998OEAFQpoP7LyLyqg2DiqOuMD9HMuMdP4=",
        "auth": "ddsUiPSKHVn6Lnt7lx5NwQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '724864040148',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);