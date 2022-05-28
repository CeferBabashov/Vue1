const { createApp } = Vue

createApp({

  data() {
    return {
      MonsterPoint: 100,
      PlayerPoint: 100,
      rnd_number1: Math.floor(Math.random() * 16),
      rnd_number2: Math.floor(Math.random() * 16),
      rnd1: Math.floor(Math.random() * 11 + 1),
      // attack_btn: false
    }
  },
  methods: {
    attack(e) {
      this.MonsterPoint -= this.rnd_number1;
      this.PlayerPoint -= this.rnd_number2;

      console.log(`rnd1 is ${this.rnd_number1}`);
      console.log(`rnd2 is ${this.rnd_number2}`);

      if (this.MonsterPoint <= 0) {
        this.MonsterPoint = 0;
        alert("Player Won");
        let attack_btn=document.querySelector('.attack_btn');
        let violent_attack_btn=document.querySelector('.violent_attack_btn');
        let health_btn=document.querySelector('.health_btn');
        attack_btn.setAttribute('disabled','disabled');
        violent_attack_btn.setAttribute('disabled','disabled');
        health_btn.setAttribute('disabled','disabled');
      }
      else if (this.PlayerPoint <= 0) {
        this.PlayerPoint = 0;
        alert("Monster Won");
        let attack_btn=document.querySelector('.attack_btn');
        let violent_attack_btn=document.querySelector('.violent_attack_btn');
        let health_btn=document.querySelector('.health_btn');
        attack_btn.setAttribute('disabled','disabled');
        violent_attack_btn.setAttribute('disabled','disabled');
        health_btn.setAttribute('disabled','disabled');

      }
    },
    vioelent_atack() {
      // ....
    },
    Increase_Health() {
      console.log(`Rnd is  ${this.rnd1}`);
      this.PlayerPoint += this.rnd1
      if (this.PlayerPoint >= 100) {
        this.PlayerPoint = 100
      }
    },

    exit() {
      document.querySelector('.start').style.display = 'block';
      location.reload();

    },
    show() {
      let start = document.querySelector('.start');
      document.querySelector('.buttons').style.display = 'block';
      start.style.display = 'none'
    }


  }
}).mount('#app')



  // let attack_btn=document.querySelector('.attack_btn');
  // let MonsterPoint=100;
  // let PlayerPoint=100;

  // if(MonsterPoint || PlayerPoint == 0 ){
  //   attack_btn.setAttribute('disabled','true')
  // }



