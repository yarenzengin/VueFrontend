<template>
  <div v-if="guncellenecekTodo" class="submit-form">
    <div class="form-group">
      <label for="title" >Başlık : </label>
      <input type="text"
             class="form-control"
             id="title" required
             v-model="guncellenecekTodo.title"
             name="title" />
    </div>
    <div class="form-group">
      <label for="description" >Açıklama : </label>
      <input type="text"
             class="form-control"
             id="description"
             v-model="guncellenecekTodo.description"
             required name="description" />
    </div>
  </div>
</template>

<script>
import ProductsDataService from "@/services/ProductsDataService";
export default{
  name: "product-detail",

  data(){
    return{
      guncellenecekTodo: null,
    }
  },

  methods:{

    getDetail(id){
      ProductsDataService.getDetail(id).then (gelenTutorial => {
        this.guncellenecekTodo = gelenTutorial.data;
      })
    }

  },

  mounted(){
    //tutorial listteki tıklamış olduğum tutorialın id si gelecek
    this.getDetail(this.$route.params.id);
  }
}

</script>
