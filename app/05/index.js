const email_content = require('./model/email');

function removeDouble(thread) {
    let newThread= [];
    for(let i=0; i< thread.length; i++) {
       newThread[thread[i].id] = thread[i];
    }
    console.table(newThread);
}

const listFabric = {
    makeThreadList: function(length) {
        thread= [];
        let i=0;
      
        for(let a=0; a<length; a++) {
            i= i < email_content.length ? (i+ 1) : 0;
            let index = a;
            let next_index = a < (length -1) ? (index + 1) : null;
            let email = {id: index, content: 'email_content', data: new Date().toString(), next: next_index};        
        
            thread.push(email);
        }
        
        return thread;
    },
    duplicateEmails( thread ){
        let length = thread.length;
        let randomThread = [];
        let thread_result= [];

        for(let a=0; a< length; a++) {
            let randon_index = Math.floor(Math.random() * (length -1)) + 1;
            randomThread.push(thread[randon_index]);
        }
        
        for(let a=0; a< length; a++) {
           thread_result.push(thread[a]);
           thread_result.push(randomThread[a]);
        }
        return thread_result;
    },
    sort(emailThread) {
         console.log(removeDouble(emailThread));
    },
    make(size){
        let th = this.makeThreadList(size);
        return this.duplicateEmails(th);
    }
};

//let t = listFabric.make(5);
//listFabric.sort(t);

module.exports= listFabric;