<template   style="background-color:#f9dee2">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
  <div class="row">
    <div class="col-md-2 mt-2 pointer">
      Kategoriler
      <ul class="list-group mt-3">
        <li class="list-group-item"
            v-for="(category, index) in uniqueCategories" :key="index"
            @click="filterByCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  <div class="col-md-8">
    <h2>Ürün Listesi</h2>
    <div class="container mt-2">
      <div class="row">
        <div class="col-md-4 mb-4"  v-for="(product,index) in filteredProducts" :key="index">
          <div class="card mb-4 h-100" :class="{ active: index === guncelIndex }" @click="aktifProduct(product,index)">
            <div class="card-body d-flex flex-column pointer" >
              <img :src="product.image" alt="Ürün Resmi" class="card-img-top">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.price }} ₺</p>
              <div class="btn-group">
                <CartBTN :product="product"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="col-md-2">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-3 h5">
          <router-link class="nav-link" style="color: lightpink;" :class="$route.name == 'cart'? 'active':''" aria-current="page" :to="{ name: 'cart' }">
            <i class="fas fa-shopping-cart"></i>
            <span v-if="$store.state.cart.length > 0" class="align-items-center justify-content-center translate-middle badge rounded-pill bg-secondary">
            Sepete Git > {{ $store.state.cart.length }}
          </span>
          </router-link>
        </li>
      </ul>
      <div v-if="guncelProducts" class="list row">
        <div>
          <h4>Ürün Detayı</h4>
          <div>
            <label><strong>Id:</strong></label> {{ guncelProducts.id }}
          </div>
          <div>
            <label><strong>Başlık:</strong></label> {{ guncelProducts.title }}
          </div>
          <div>
            <label><strong>Açıklama:</strong></label> {{ guncelProducts.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsDataService from "@/services/ProductsDataService";
import CartBTN from "@/components/CartBTN";
export default {
  name: 'ProductList',
  components :{CartBTN},
  data(){
    return{
      products : [],
      guncelProducts: null,
      guncelIndex: -1,
      selectedCategory: null,
      maxHeight:0
    }
    },
  computed: {
    uniqueCategories() {
      // Tüm ürünlerden kategorileri toplama ve tekrarları kaldırma
      return Array.from(new Set(this.products.map(product => product.category)));
    },
    filteredProducts() {
      // Seçilen kategoriye göre ürünleri filtreleme
      if (this.selectedCategory) {
        return this.products.filter(product => product.category === this.selectedCategory);
      } else {
        return this.products;
      }
    }
  },
  methods : {
    urunGetir() {
      // Local storage'dan ürünleri al
      const productListFromStorage = localStorage.getItem('productList');
      if (productListFromStorage) {
        this.products = JSON.parse(productListFromStorage);
      } else {
        // Local storage'da ürün listesi yoksa, API'den al
        ProductsDataService.getProducts()
            .then(gelenProducts => {
              this.products = gelenProducts.data;
              // Ürünleri local storage'a kaydet
              localStorage.setItem('productList', JSON.stringify(this.products));
            })
            .catch(hata => {
              console.log(hata);
            });
      }
    },
    aktifProduct(product, index) {
      this.guncelProducts = product;
      this.guncelIndex = index
    },
    filterByCategory(category) {
      // Seçilen kategoriye göre ürünleri filtreleme işlemi
      this.selectedCategory = category;
    }
  },
  mounted() {
    this.urunGetir();
  }
}
</script>


<style>
.pointer {cursor: pointer;}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Görüntünün üst kısmında hizala */
  align-items: center; /* Ortala */
  height: 100%; /* Kartın yüksekliği boyutlandırılabilir */
}

.card-title {
  margin-top: auto; /* Kart başlığını en alta hizala */
  text-align: center; /* Başlığı ortala */
}

</style>
