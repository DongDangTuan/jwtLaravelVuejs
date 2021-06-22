<template>
    <div class="header">
        <router-link to="/" class="item">Laravel</router-link>
        <div class="login">
            <router-link to="/login" v-if="!isLoggedIn" class="item">Login</router-link>
            <div v-else>
                <span>Xin chào: {{getUser}}</span>
                <button v-on:click="logout" >Logout</button>
            </div>
            <router-link to="/register" v-if="!isLoggedIn" class="item">Register</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    computed:{
        getUser(){
            return this.$store.getters.getUser
        },
        isLoggedIn(){
            return this.$store.getters.isLoggedIn;
        }
    },
    methods:{
        logout(){
            //  this.$store.state.User.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYyNDMyMjAxMCwiZXhwIjoxNjI0MzI1NjEwLCJuYmYiOjE2MjQzMjIwMTAsImp0aSI6InJjVDN6RjhjaW9LcEtjdXIiLCJzdWIiOjEwLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.cAuaQC1WvZQxVmolDhWDtVH6CTByZSjfdU9pf-FsA9g";
            let header={
                headers:
                {
 Authorization: 'Bearer '+this.$store.state.User.token 
                }
               
            }
            axios.post('/api/auth/logout',null,header).then(res=>{
                this.$store.commit('logout');
                this.$router.push('/login');
            })
        }
    }
}
</script>
<style scoped>
    .header{
        padding: 20px 40px;
        display: flex;
        justify-content:space-around;
        align-items: center;
        background: rgb(216, 210, 210);

    }
    .item{
        color:rgb(44, 43, 43);
        text-decoration: none;
        font-weight: 600;
        margin-left: 20px;
        padding: 5px;
    }
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        border: none;
        outline: none;
        padding: 5px 5px;
        border-radius: 10px;
    }
</style>