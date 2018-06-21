//describtion
//corgi-bot that adds a picture of a corgi anytime someone uses the words "dog", "corgi", "butt", and "shake"

const SlackBot = require('slackbots');
let currentChannel = '';


const bot = new SlackBot({
    token:'xoxb-384911107255-385722028181-kqaAL7kaH4e7awlETEtGXoMP',
    name:'corgibot'
});

//start
bot.on('start', () => {
    console.log('server started...');
});

//error
bot.on('error', (err) => console.log(err));

//message
bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }
    currentChannel = data.channel;
    handleMessage(data.text);
});

//response to data
function handleMessage(message) {
    if (message.includes(' dog')) {
        corgiPhoto();
    } else if (message.includes(' corgi')) {
        corgiPhoto();
    } else if (message.includes(' butt')) {
        corgiPhoto();
    } else if (message.includes(' shake')) {
        corgiPhoto();
    }
}

//post a photo of corgi
function corgiPhoto() {
    const params = {
        "icon_emoji": ':dog:',
        "attachments": [
            {
                "text": "Posted using @corgibot",
                "image_url": "http://i820.photobucket.com/albums/zz126/Nour_Balaha/5_zps0rm4f3fl.png"
            }
        ]
    }
    for (let i = 0; i < bot.channels.length; i++) {
        if (bot.channels[i].id === currentChannel) {
            bot.postMessageToChannel(bot.channels[i].name, 'Corgi', params);
        }
    }
}