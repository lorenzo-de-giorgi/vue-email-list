const {createApp}  = Vue;
createApp({
    data(){
        return{
            numEmails: 10,
            emails: []
        }
    },
    methods: {
        getRandomEmail(){
            let emailList = []
            for(let i = 0; i < this.numEmails; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=> {
                    console.log(res.data);
                    const email = res.data.response;
                    emailList.push(email);
                })
            }
        },
    },
    mounted() {
        this.getRandomEmail()
    },
}).mount('#app')