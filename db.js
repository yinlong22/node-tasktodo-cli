const homedir = require('os').homedir()
const home = process.env.HOME || homedir
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home, 'todo')

module.exports.read = async (path = dbPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {flag: 'a+'}, (error, data) => {
            if (error) return reject(error)
            let list
            try {
                list = JSON.parse(data.toString())
                console.log(JSON.stringify(list));
            } catch (e) {
                list = []
            }
            resolve(list)
        })
    })
}

module.exports.write = async (list, path = dbPath) => {
    return new Promise((resolve, reject) => {
        const string = JSON.stringify(list)
        fs.writeFile(path, string + '\n', (error) => {
            if (error) return reject(error)
            resolve()
        })
    })
}

