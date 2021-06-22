<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h2>Update sản phẩm</h2>
        </div>
        <div class="card-body">
          <div class="form-group row">
            <label class="col-md-4">Name</label>
            <div class="col-md-8">
              <input
                type="text"
                v-model="product.name"
                class="form-control"
                placeholder="Name..."
              />
            </div>
          </div>
          <div class="form-group row">
              <div class="col-md-8 offset-4">
                     <input type="button" class="btn btn-primary form-control" @click="updateProduct"  value="Submit">
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
      }
    };
  },
  methods:{
      updateProduct(){
          console.log(this.$route.params.id);
          let a=localStorage.getItem('token');
          console.log(a);
          this.$store.dispatch('updateProduct',this.product);
          this.$router.push('/');
      }
  },
  created(){
      this.$store.state.Product.listProduct.forEach(element => {
          if(element.id==this.$route.params.id)
            {
                this.product=element;
            }
      });
  }
//   computed:{
//       getByID(id)
//       {
//  this.product=this.$store.state.Product.listProduct.forEach(element => {
//      if(element.id==id)
//         return elment;
//  });
//       }
//   }
};
</script>