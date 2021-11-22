/*
Descrizione:
Attraverso l’apposita API di Boolean
 https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email
e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

var app = new Vue({
    el: '#app',
    data:{
        emails:[],
    },
    mounted(){
        // const self = this;
        // chiamiata get su api boolean
        // creiamo un for di 10 obj ed inseriamo ogni email nell'array emails inizialmente vuoto 
        for( i=0; i<10; i++ ) {
            
            // metodo 1 - NB decommentare riga 17
            // axios
            // .get('https://flynn.boolean.careers/exercises/api/random/mail')
            // .then(function(risultato){
            //     self.emails.push(risultato.data.response);
            // });

            // metodo 2
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( risultato => this.emails.push(risultato.data.response));

        };
    },
    
})