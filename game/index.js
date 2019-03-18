'use strict'
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const TimSort = require('timsort');

const app = new Koa()

app.use(bodyParser())

const router = new Router()

router.post('/', async (ctx) => {
    const players = ctx.request.body
    while(players.length > 1) {
        // players.forEach((player) => {
        //     player.score = Math.random()
        // })
        // TimSort.sort(players, (a, b) => b.score - a.score)
        // players.sort((a, b) => b.score - a.score)
        // players.pop()
        let lower = Math.random()
        let index = 0
        for(let i=1;i<players.length;i++) {
            const score = Math.random()
            if (score < lower) {
                lower = score
                index = i
            }
        }
        players.splice(index, 1)
    }
    ctx.body = players[0].name
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT || 80)
