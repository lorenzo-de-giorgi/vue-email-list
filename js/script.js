const {createApp}  = Vue;
createApp({
    data(){
        return{
            emails: [],
            numEmails: 10
        }
    },
    methods: {
        getRandomEmail(){
            const emailList = []
            for(let i = 0; i < this.numEmails; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=> {
                    console.log(res.data);
                    const email = res.data.response;
                    emailList.push(email);
                    if(i === this.numEmails - 1){
                        this.emails = [...emailList ]
                    }
                })
            }
        },
    },
    mounted() {
        this.getRandomEmail()
    },
}).mount('#app')