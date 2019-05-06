#!/usr/bin/env node

const program = require("commander");
const getFrameType = require("./lib/getFrameType");

program
    .version("1.1.3", '-v, --version')
    .description("初始化用，省去每个脚手架去除默认文件的繁琐")
    .parse(process.argv);

program
    .command("init <template> <dir>")
    .action(function (template, dir) {
        getFrameType(dir);
    });
program.parse(process.argv);
