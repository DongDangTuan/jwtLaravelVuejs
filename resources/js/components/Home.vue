<template>
    <div class="container">
        <br>
        <br>
       <h1>Quản lí sản phẩm</h1>
       <br>
       <div class="row">
           <div class="col-md-4">
               <input type="text" class="form-control" v-model="search" placeholder="Nhập tên sản phẩm ...">
           </div>
           <div class="col-md-4">
              <router-link class="btn btn-primary" to="/product/create">Thêm</router-link>
           </div>
       </div>
       <br>
       <div class="row">
           <table class="table table-bordered">
               <thead>
                   <td>ID</td>
                   <td>Name</td>
                   <td></td>
               </thead>
               <tbody>
                   <tr v-for="pro in getListProduct" :key="pro.id">
                       <td>{{pro.id}}</td>
                       <td>{{pro.name}}</td>
                       <td><router-link :to="{name:'product.edit',params:{id:pro.id}}" class="btn btn-info">Edit</router-link> ||
                            <button @click="deleteProduct(pro.id)" class="btn btn-danger">Delete</button>
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            search:''
        }
    },
    computed:{
        getListProduct(){
            return this.$store.getters.getListProduct.filter(pro=>{
                return pro.name.includes(this.search);
            });
        }
    },
    created(){
        this.$store.dispatch('getListProducts');
    },
    methods:{
        deleteProduct(id){
            console.log(localStorage.getItem('token'));
            this.$store.dispatch('deleteProduct',id);
        }
    }
}
</script>