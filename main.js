var app = new Vue({
    el: '#root',
    data: {
        mailList: [],
        visible: false
    },

    beforeUpdate(){
        
       if(this.mailList.length == 10){
            this.visible = true
       }
        
    },
        

    methods:{
        print(){
            for( i= 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    let randomMail = response.data.response
                    this.mailList.push(randomMail)
            })
            }
            
            console.log(this.mailList)
        }
    }
})