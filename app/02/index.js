/**
 * @author Ruddá Silva Beltrao Brito at 29/05/2020
 * @description
 */

const dictionary = require('./src/fruits');

const q2 = {
    /**
     * @description
     * 
     * @param {string} str 
     * @param {string} str2 
     */
    isJumbled: function(str, str2) {
        if(str.charAt(0) == str2.charAt(0)){
            return false;
        } else if (str2.charAt(1) === str.charAt(0) && str2.charAt(0) == str.charAt(1)) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * @description
     * 
     * @param {string} word 
     * @param {string} pseudo 
     * @param {int} length 
     */
    jumbledLetters: function(word, pseudo, length){
        let jumbled_count = 0;
        //let isNotjumbled_count = 0;

        if (word.charAt(0) === pseudo.charAt(0)) {
            jumbled_count ++;
            word = word.substring(1);
            pseudo = pseudo.substring(1);
         
            for(let i= 0;  i < length ; i++) {
                let isJumbled = this.isJumbled(word.substring(i), pseudo.substring(i));
                if(isJumbled) {
                    jumbled_count ++;
                }
            }
        } 
        return jumbled_count;
    },
    /**
     * @description
     * 
     * @param {string} word 
     * @param {string} pseudo 
     */
    run: function(word, pseudo){
        word = !!word ? word : '';
        pseudo= !!pseudo ? pseudo : '';

        if (word.length === pseudo.length && word.length ) {
            
            this.jumbledLetters(word, pseudo);

        } else {
            console.error(`there is no match in ${word} and ${pseudo} length`);
            ProcessingInstruction.exit(1);
        }
    }
};

let result = q2.jumbledLetters('despite', 'desptie', 'despite'.length);
console.log(result);

module.exports = q2;
