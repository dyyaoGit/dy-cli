const inqurier = require('inquirer');
const gitClone = require('download-git-repo');
const shell = require('shelljs');
const reWriteHtml = require('../lib/reWriteHtml');
const reWriteNavBar = require('../lib/reWriteTitle');

function inqurierPromise (options) {
    return new Promise((resolve, reject) => {
        inqurier.prompt({
            ...options
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}

function gitClonePromise(url, localPath){
    return new Promise((resolve, reject) => {
        console.log('download template...');
        gitClone(url, localPath, function (err) {
            if(err){
                reject(err)
                return
            }
            resolve();
        })
    })
}

async function getFrameType (dirname) {
    try {
        let downloadUrl = '';
        const step1 = await inqurierPromise(
            {
                message: "需要vue还是react  1.vue 2.react",
                name: 'needFrame',
                default: 1,
                type: 'number'
            }
        )
        if(step1.needFrame == 1){
            const step2 = await inqurierPromise({
                message: "需要一个空模板还是后台模板？  1.空模板 2. 后台模板",
                name: 'needTemplate',
                default: 1,
                type: 'number'
            })
            if(step2.needTemplate == 1){

            } else if(step2.needTemplate == 2){
                await gitClonePromise('dyyaoGit/vue-admin-template', process.cwd() + "/" + dirname);
                console.log("success download");
                await reWriteHtml(dirname, `${process.cwd()}/${dirname}/index.html`);
                await reWriteNavBar(dirname, `${process.cwd()}/${dirname}/src/views/layout/components/Navbar.vue`)
            }
        } else if(step1.needFrame == 2) {

        }
    } catch(err){
        console.log(err);
    }

}

module.exports = getFrameType;
