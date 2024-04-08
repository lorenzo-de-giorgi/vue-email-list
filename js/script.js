const {createApp} = Vue;

createApp({
    data(){
        return{
            emails:[],
            numEmail: 10
        }
    },
    methods: {
        getRandomEmail(){
            const emailList = [];
            for(let i = 0; i < this.numEmail; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            }
        }
    },
    mounted() {
        
    },
}).mount('#app')