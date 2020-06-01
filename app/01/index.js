/**
 * @author: Ruddá Silva Beltrão Brito at 28/05/2020
 * 
 * @description
 * Given an array of characters, write a method to replace all the spaces with “&32”.
 * You may assume that the array has sufficient slots at the end to hold the additional
 * characters, and that you are given the “true” length of the array. (Please perform this
 * operation in place with no other auxiliary structure).
 *
 *    Example:
 *    Input: “User is not allowed “, 19
 *    Output: “User&32is&32not&32allowed”
 */
const input = require('./src/proverbs');

const q1 = {
    /**
     * @description 
     * This is a didatic way to replace a string content
     * there are so many others ways to replace a string content. In JavaScript for example 
     * there's a replace as a string native method
     * 
     * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     *  
     * @param {string} mString string to be replaced  
     * @param {string} replaceTo string that will replace instace of space character 
     * @param {int} lenght size of string 
     */
    replace: function (mString, replaceTo, lenght) {
        let aux = '';

        for (let i = 0; i < lenght; i++) {
            let character = mString.charAt(i);

            if (character === ' ') {
                aux = `${aux}${replaceTo}`;
            } else {
                aux += character;
            }
        }
        return aux;
    },

    /**
     * @description this is a auxiliar method to run replace function with many ways
     * @param {int} range how many sentences from input array will be replaced
     * @param {string} replaceTo  a string to replace a space character
     */
    run: function (range, replaceTo) {
        replaceTo = !!replaceTo ? replaceTo : '&32';
        range = !!range && range > 0 ? range > input.length ? input.length : range : 1;

        for (let a = 0; a < range; a++) {
            let result = this.replace(input[a].text, replaceTo, input[a].text.length);

            console.log(`\noriginal string: ${input[a].text}`);
            console.log(`replaced string: ${result} \n`);
        }
    }
};

module.exports = q1;