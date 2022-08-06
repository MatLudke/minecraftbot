const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    username: 'MatLudke',
    host:'jogar.ezert.com.br',
    version: "1.12.2",
    viewDistance: "normal"

})


bot.on('spawn', async () =>{

    await bot.chat('/login matludke21');

    setTimeout(() => {
    bot.setQuickBarSlot(3)
    bot.activateItem(true)
    bot.on('windowOpen', () =>{
        bot.clickWindow(22, 0, 0)
    })
    }, 4000);



    setTimeout(() => {
        bot.chat('/p h 2')

        bot.chat('/plot middle')
    }, 3000);

})

