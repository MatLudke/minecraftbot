const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
    username: 'MatLudke',
    host:'play.pika-network.net',
    version: "1.16.5",
    viewDistance: "normal"
    
})

const viewer = require('prismarine-viewer').mineflayer
bot.once('spawn', () => {
    viewer(bot, {port :3000})
})
bot.on('spawn', async () =>{

    await bot.chat('/login matludke21');

    setTimeout(() => {
    bot.setQuickBarSlot(0)
    bot.activateItem(true)
    bot.on('windowOpen', () =>{
        bot.clickWindow(12, 0, 0)
    })
    bot.on('windowOpen', () =>{
        bot.clickWindow(15, 0, 0)
    })
    }, 3000);

    bot.chat('/is go')
console.log("everything is fine");
})

