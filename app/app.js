#!/usr/bin/env node

const q1 = require("./01/index");
const q2 = require("./02/index");
const q3 = require("./03/index");
const q5 = require("./05/index");
const q7 = require("./07/index");

var argv = require('minimist')(process.argv.slice(2));

function main () {
if(argv.q1) {
    if(argv.help) {

        console.log('------------------------------------- help -----------------------------------------\n')
        console.log("--range", "\t\tsentences that will to be replaced", "example: --range=2");
        console.log("--replaceTo", "\t\tchoise a string to replace spaces in sentences deafult is &32", "example: --replaceTo=!!!@@");
        console.log('\n\n\n');

    } else {
        q1.run(argv.range, argv.replaceTo);
    }

} else if( argv.q2) {

    if(argv.help) {
        console.log('------------------------------------- help -----------------------------------------\n')
        console.log("--str1", "\t\t1st string to be checker", "example: --str1=you");
        console.log("--str2", "\t\tstring to be compared", "example: --str2=yuo");
        console.log('\n\n\n');

    } else {
       let result = q2.jumbledLetters(argv.str1, argv.str2, argv.str1.length);
       console.log(result>1);
    }

} else if( argv.q3) {
    if(argv.help) {

        console.log('------------------------------------- help -----------------------------------------\n')
        console.log("--str1", "\t\tmain string ", "example: --str1=pale");
        console.log("--str2", "\t\tstring to be compared if theres a typo", "example: --str2=ple");
        console.log('\n\n\n');

    } else {
        let result = q3.isTypo(argv.str1, argv.str2);
        console.log(result);
    }
}else if( argv.q5) {

    let t = q5.make(20);
    console.log('ginven the follow list then:');
    console.table(t);
    q5.sort(t);

}else if( argv.q7) {
    q7.run();
}
}

main();

module.exports = main;