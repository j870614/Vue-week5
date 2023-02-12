export default {
  template: '#userProductModal',
  props:['product'],
  data(){
    return {
      modal: {},
      qty: 1
    }
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal);
    
  },
  methods: {
    openModal(){
      this.modal.show();
    },
    hideModal(){
      this.modal.hide();
    }
  }
}