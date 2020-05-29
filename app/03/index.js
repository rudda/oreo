const my_char = { value: '', checked: false};
const q3 = {
    isTypo: function(str1, str2) {
        const str1_index= str1.length;
        const str2_index= str2.length;
        let j=0; j_index = 0, no_match_count=0, match_count=0;
        let match = false;

        for(let i=0; i< str2_index; i++) {
            j_index = j;
            for(;j<str1_index; j++){
                //console.log(str2.charAt(i),'-->', str1.charAt(j));
                if(str2.charAt(i) === str1.charAt(j)) {
                    match = true;
                    match_count ++;
                    j++;
                    break;
                } else {
                    no_match_count ++;
                }
            }
            //console.log('-----------------------', match)
            
            //if(!match) {
             //   j= j_index;
              //  match_count++;
           // }
            j= !match ?  j_index : j;
            //console.log(!match, match_count);
            //match_count = !match ? match_count+= 1 : match_count;
            match = false;
        }
        // add case
        no_match_count = (no_match_count === 0 && str1_index > str2_index) ? no_match_count+= 1 : no_match_count;
        console.log( no_match_count, match_count );
    },
    run: function() {

    }
};

q3.isTypo("pale", "ple");
q3.isTypo('pales', 'pale');
q3.isTypo("pale", "bale");
q3.isTypo('pale', 'bake');

