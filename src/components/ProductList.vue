<template>
    <div class="col-md-6">
      Ürün Listesi
      <ul>
        <li class="list-group-item"
            v-for="(product,index) in products" :key="index"
            :class="{ active: index == guncelIndex }"
            @click="aktifProduct(product,index)">
          {{product.title}}
        </li>
      </ul>
    </div>
</template>

<script>
import ProductsDataService from "@/services/ProductsDataService";
export default {
  name: 'HelloWorld',
  data(){
    return{
      products : [],
      guncelTodos: null,
      guncelIndex: -1
    }
    },
  methods : {
    urunGetir(){
      ProductsDataService.getProducts().then(gelenProducts=> {
        this.products = gelenProducts.data;
        console.log(gelenProducts.data);
      })
          .catch(hata => {
            console.log(hata);
          })
    },
    aktifProduct(product,index){
      this.guncelProducts = product;
      this.guncelIndex = index
    },
  },
  mounted() {
    this.urunGetir();
  }
}
</script>


<style>
.pointer {cursor: pointer;}

</style>
