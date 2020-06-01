

function register(index, my_char, match, map) {
    map[index]={value: my_char, status: match};
}

const q3 = {
    /**
     * 
     * @param {string} str1 
     * @param {string} str2 
     */
    isTypo: function(str1, str2) {
        let char_map = [];
        const str1_index= str1.length;
        const str2_index= str2.length;
        let j=0, j_index = 0;
        let match = false, typo=0;
        
        for(let i=0; i< str1_index; i++) {
            j_index = j;
            
            if (j === str2_index) {
                match = false;
                register(i, str1.charAt(i), match, char_map) ;
            }
            for(;j<str2_index; j++){
               
                if(str1.charAt(i) === str2.charAt(j)) {
                   match = true;
                   register(i, str1.charAt(i), match, char_map) ;
                   j++;
                   break;
                } else {
                   match = false;
                   register(i, str1.charAt(i), match, char_map) ;
                }
                
            }
       
            j= !match ?  j_index : j;
            typo= char_map[i].status === false ? typo+= 1: typo;
        }
        console.log(typo);
        console.table(char_map);
         return typo <= 1;
        
    },
    run: function() {

    }
};

q3.isTypo("pale", "ple");
q3.isTypo('pales', 'pale');
q3.isTypo("pale", "bale");
q3.isTypo('pale', 'bake');
q3.isTypo('banana', 'banana');
q3.isTypo('bananaaaaaaaaaaaaaaa', 'banana');

module.exports = q3;