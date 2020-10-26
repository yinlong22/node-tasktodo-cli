#!/user/bin/env node
const program = require('commander');
const api = require('./index.js')
const pkg = require('./package.json')

program
    .version(pkg.version)
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(-1).join(' ')
        console.log(words);
        api.add(words).then(() => {
            console.log('添加成功')
        }, () => {
            console.log('添加失败')
        })
    })
program
    .command('clear')
    .description('clear all task')
    .action(() => {
        api.clear().then(() => console.log('清空成功'), () => console.log('清空失败'))
    })
program
    .command('run')
    .description('start')
    .action(() => {
        api.run().then(r => console.log(r))
    })
program.parse(process.argv);

