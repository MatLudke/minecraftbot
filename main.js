const mineflayer = require('mineflayer')
const mineflayerViewer = require('prismarine-viewer').mineflayer
const pathfinder = require('mineflayer-pathfinder').pathfinder
const { GoalNear } = require('mineflayer-pathfinder').goals
var v = require('vec3');

const bot = mineflayer.createBot({
    username: 'MatLudke',
    host:'jogar.ezert.com.br',
    version: "1.12.2",
    viewDistance: "normal"

})

bot.once('spawn', () => {  mineflayerViewer(bot, { port: 3000 })})

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

