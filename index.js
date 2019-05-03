const program = require('commander');
const inqurier = require('inquirer');

console.log("这是dyyao的脚手架");
program
    .version("0.0.1", '-v, --version')
    .description("这是一个简单的脚手架测试")
    .parse(process.argv);

program
    .command("init <template> <dir>")
    .action(function (template, dir) {
        console.log("你选择的模板是: " + template);
        console.log("你输入文件夹名字是： " + dir);
        inqurier.prompt({
            message: "是否需要vue的路由？",
            name: 'isRouter'
        }).then(res => {
            console.log(res);
            console.log(res.isRouter);
        })
    });
program.parse(process.argv);



// if(program.people){
//     console.log("你点击了p")
// } else if(program.black){
//     console.log("你点击了b")
// }
// program
//     .command("* <one> <two>")
//     .action(function (one, two) {
//     console.log(one, 'one');
//     console.log(two, 'two');
// }).parse(process.argv);


