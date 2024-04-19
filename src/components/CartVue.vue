
<template>
  <section class="h-100 h-custom min-h-content" >
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card border-0">
            <div class="card-body p-4">

              <div class="row">
                <div class="col-lg-7">
                  <h5 class="mb-3"><router-link :to="{name:'products'}" class="text-body"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Ürünler</router-link></h5>
                  <hr>
                  <div v-for="item in $store.state.cart" class="card mb-3 shadow-sm border-0" :key="item.id">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                          <div>
                            <img
                                :src="item.image"
                                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                          </div>
                          <div class="ms-3">
                            <p>{{ item.name }}</p>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                          <div >
                            <CartAddRemove :product="item"/>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                          <div >
                            <h5 class="mb-0"><i class="bi bi-currency-dollar"></i>{{ item.price*item.qty }}</h5>
                            <small v-if="item.hasDiscount" class="text-muted text-decoration-line-through"><i class="bi bi-currency-dollar"></i>{{ item.price}}</small>
                          </div>
                          <a role="button" @click="removeItem(item)" class="ms-4" style="color: #cecece;"><i class="bi bi-trash3 h4"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-lg-5">

                  <div class="card bg-primary text-white rounded-0 border-0">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Sepet Detayları</h5>
                        <i class="bi bi-cart3 h1"></i>
                      </div>
                      <hr class="my-4">
                      <div>
                        <div class="d-flex justify-content-between">
                          <p class="mb-2">1000 Üzeri %10 İndirim!</p>
                        </div>
                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Ara Toplam : {{ $store.getters.stateSayacIncrement }} ₺</p>
                        </div>
                      </div>

                      <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Toplam : {{ $store.state.cartTotal }} ₺</p>
                      </div>

                      <button type="button" class="btn btn-lg" style="background-color:aliceblue" >
                        <router-link :to="{name:'products'}">
                        Alışverişe Devam Et
                        </router-link>
                      </button>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CartAddRemove from '../components/CartAddRemove.vue';
export default{
  name: "CartVue",
  components :{CartAddRemove},
  methods:{
    removeItem(item){
      this.$store.commit('addRemoveCart',{product:item,toAdd:false})
    },
  },
  mounted(){
  }

}
</script>
