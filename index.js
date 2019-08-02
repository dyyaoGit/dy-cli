#!/usr/bin/env node

const program = require("commander");
const getFrameType = require("./lib/getFrameType");
const fsPromise = require('./lib/fsPromise');
const path = require('path');

program
    .usage("dy init webpack [project-name]")
    .version("1.1.4", '-v, --version')
    .description("初始化用，省去每个脚手架去除默认文件的繁琐")
    .parse(process.argv);

program
    .command("init <template> <dir>")
    .action(function (template, dir) {
        getFrameType(dir);
    });

program
    .command("new <template> <file-name>")
    .action(async function (template, filename) {
        let data = await fsPromise.readFile(path.join(__dirname, 'lib/template.vue'));
        let reg = new RegExp(/test/, 'g');
        let newData = data.replace(reg, filename);
        await fsPromise.writeFile(process.cwd() + '/' + filename + '.vue', newData);
        console.log('文件新建完成');
    });
program.parse(process.argv);
