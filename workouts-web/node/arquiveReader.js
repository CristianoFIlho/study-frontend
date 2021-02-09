const fs = require('fs')

const lane = __dirname + '/arquive.json'

//sincronaze

const content = fs.readFileSync(lane, 'utf-8')
console.log(content)

fs.readFile(lane, 'utf-8', (err, content) => {

    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)

})

const config = require('./arquive.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquives) => {
        console.log('content from folder...')
        console.log(arquives)
    }


)