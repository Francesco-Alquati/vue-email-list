const { createApp } = Vue;

  createApp({
    data() {
      return {
        email: null,
        
      }
    },
    created (){
        this.generateEmails();
    },
    methods: {
        generateEmails(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.email = response.data.response
            });
        }

    }
  }).mount('#app')