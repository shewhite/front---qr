const app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    company:'',
    companyAdress:'', 
    email:'',
    phone:'',
    website:'',   
    comment: '',
    showByIndex: null, //treba za funkciju pokazivanje tamne i svijetle slike
    image-myQr: './images/my-qr.png',
  computed: {
    fullName: {
      get: function() {
        if (this.firstName && this.lastName) {
          return this.firstName + ' ' + this.lastName;
        } else {
          return this.firstName || this.lastName;
        }
      },
      set: function(newFullName) {
        const names = newFullName.split(' ');

        if (names.length === 2) {
          this.firstName = names[0];
          this.lastName = names[1];
        }
        
        if (names.length <= 1) {
          this.firstName = names[0] || '';
          this.lastName = '';
        }
      }
    },
   
    formIsValid: function() {
      return this.firstName && this.lastName && this.email && this.purchaseAgreementSigned;
    }
  },
  watch: {
    specialRequests: function(newRequests, oldRequests) {
      if (newRequests.toLowerCase().includes('meet and greet') || 
          newRequests.toLowerCase().includes('meet-and-greet')) {
        this.ticketType = 'vip';
      }
    }
  },
  methods: {
    resetFields: function() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.ticketQuantity = 1;
      this.ticketType = 'general';
      this.referrals = [];
      this.specialRequests = '';
      this.purchaseAgreementSigned = false;
    }
  }
});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

  