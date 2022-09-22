const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    username: 'MatLudke',
    host:'redesky.gg',
    version: "1.8.9",
    viewDistance: "normal"

})


bot.on('spawn', async () =>{

    await bot.chat('/login matludke21');

    setTimeout(() => {
    bot.setQuickBarSlot(0)
    bot.activateItem(true)
    bot.on('windowOpen', () =>{
        bot.clickWindow(30, 0, 0)
    })
    }, 4000);
console.log("everything is fine");
})

