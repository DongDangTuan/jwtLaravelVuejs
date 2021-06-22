<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h2>Create sản phẩm</h2>
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
                     <input type="button" class="btn btn-primary form-control" @click="createProduct"  value="Submit">
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            product:{
                name:''
            }
        }
    },
    methods:{
        createProduct(){
            if(this.product.name=='')
                return;
            this.$store.dispatch('addProduct',this.product);
            this.$router.push('/');
        }
    }
}
</script>