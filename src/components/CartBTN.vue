<template>
  <button type="button" @click="addOrRemove()"  class="cart-btn btn btn-sm btn-outline-secondary me-2" style="background-color:lightpink;">
    <i :class="toAdd?'fas fa-cart-plus':'fas fa-cart-arrow-down'"></i>
  </button>
  <CartAddRemove v-if="!toAdd" :product="item"/>
</template>


<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default{
  props:['product'],
  components :{CartAddRemove},
  data(){
    return{
      toAdd:true,
      item:[]
    }
  },
  methods:{
    async addOrRemove(){
      this.item.qty = 1
      this.$store.commit('addRemoveCart',{product:this.item, toAdd:this.toAdd})
      let toastMSG
      this.toAdd?  toastMSG = 'Sepete eklendi.' :  toastMSG = 'Sepetten çıkarıldı.'
      toast(toastMSG, {
        autoClose: 1000,
      });
      this.toAdd = !this.toAdd
    }
  },
  mounted(){
    let cart = this.$store.state.cart
    let obj = cart.find(o => o.id === this.product.id)
    if(obj){
      this.toAdd = false
      this.item = obj
    }else{
      this.item = this.product
      this.toAdd = true
    }

  }
}
</script>
<style>

.cart-btn {
  width:40px;
  height: 38px;
}
.plus-minus input{
  max-width: 50px;
}


</style>
