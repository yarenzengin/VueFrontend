import http from "../httpcommon";

class ProductsDataService{

    getProducts(){
        return http.get("/products");
    }

     getDetail(id){
        return http.get(`/products/${id}`)
    }
}
export  default new ProductsDataService();
