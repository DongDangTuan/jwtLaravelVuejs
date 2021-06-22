
<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <form @submit.prevent="register">
        <div class="card">
          <div class="card-header">Đăng kí</div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4">Name</label>
              <div class="col-md-8">
                <input
                  type="text" v-model="user.username"
                  class="form-control"
                  placeholder="Nhập tên ..."
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4">Email</label>
              <div class="col-md-8">
                <input type="text" v-model="user.email" class="form-control" placeholder="Email.." />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4">Password</label>
              <div class="col-md-8">
                <input
                  type="password" v-model="user.password"
                  class="form-control"
                  placeholder="Password.."
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-8 offset-4">
                <input type="submit" class="btn btn-primary" value="Đăng kí" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            user:{
                
            }
        }
    },
    methods:{
        register(){
            axios.post('/api/auth/register',this.user).
            then(res=>{
                if(res.data.status)
                    this.$router.push('/login');
            })

        }
    }
}
</script>