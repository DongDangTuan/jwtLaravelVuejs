<template>
  <div class="row justify-content-center form-login">
    <div class="col-md-4 offset-4" v-if="Loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="col-md-4" v-else>
      <form @submit.prevent="login">
        <div class="card">
          <div class="card-header">Đăng nhập</div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4">Email</label>
              <div class="col-md-8">
                <input
                  type="text"
                  v-model="user.email"
                  class="form-control"
                  placeholder="Email.."
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4">Password</label>
              <div class="col-md-8">
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="Password.."
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-8 offset-4">
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="Đăng nhập"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      this.$store.commit("startLogin");
      axios.post("/api/auth/login", this.user).then((res) => {
        if (res.status == 200) {
          console.log(res.data.token);
          this.$store.commit("setUser", res.data.user);
          this.$store.commit("setToken", res.data.token);
          this.$router.push("/");
        }          
      }).catch(err=>{
          this.$store.commit("loginFail");
      });
    },
  },
  computed: {
    Loading() {
      return this.$store.getters.getLoading;
    },
  },
};
</script>
<style scoped>
.form-login {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 5px;
}
.card-header {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
</style>