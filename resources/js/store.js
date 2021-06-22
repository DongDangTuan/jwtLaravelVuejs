
export default {
    state:{
        user:null,
        token:null,
        loading:false
    },
    mutations:{
        setUser(state,user){
            state.user=user;
        },
        setToken(state,token)
        {
            state.token=token;
            localStorage.setItem('token',token);
            state.loading=false;
        },
        startLogin(state){
            state.loading=true;
        },
        loginFail(state){
            state.loading=false;
        },
        logout(state){
            state.loading=false;
            state.user=null;
            state.token=null;
            localStorage.removeItem('token');
        }
    },
    actions:{},
    getters:{
        getLoading(state){
            return state.loading;
        },
        getUser(state){
            return state.user?state.user.name:'';
        },
        isLoggedIn(state){
            return !!state.token;
        }
    }
}