// middleware patters 

const pass1 = (ctx, next) => {

    ctx.value1 = 'mid1'
    next()
}

const pass2 = (ctx, next) => {
    ctx.value2 = 'mid2'
    next()
}

const pass3 = ctx => ctx.value3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPass = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPass(indice + 1))

    }

    execPass(0)
}

const ctx = {}

exec(ctx, pass1, pass2, pass3)
console.log(ctx)