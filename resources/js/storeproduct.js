import axios from "axios";
const url='/api/product/';
const token=localStorage.getItem('token');
const header={
    headers:{
        Authorization:'Bearer '+token
    }
}
const state={
    listProduct:[]
};
const mutations={
    setListProduct(state,products)
    {
        state.listProduct=products;
    },
    addProduct(state,product)
    {
        state.listProduct.push(product);
    },
    updateProduct(state,product)
    {
        state.listProduct.forEach((element,index) => {
            if(element.id==product.id){
                element.name=product.name;
            }
        });
    },
    deleteProduct(state,id){
        state.listProduct.forEach((element,index)=>{
            if(element.id==id){
                state.listProduct.splice(index,1);
            }
        })
    },

};
const actions={
    getListProducts(context){
        axios.get(url+'index',header).
        then(res=>{
            if(res.status==200)
                context.commit('setListProduct',res.data);
        })
    },
    addProduct(context,product){
        axios.post(url+'add',product,header)
        .then(res=>{
            if(res.status==200)
            {
                context.commit('addProduct',res.data);
            }
        })
    },
    updateProduct(context,product){
        axios.put(url+'update/'+product.id,product,header).
            then(res=>{
                if(res.status==200)
                    {
                        context.commit('updateProduct',res.data);
                    }
            })
    },
    deleteProduct(context,id){
        axios.delete(url+'delete/'+id,header).
            then(res=>{
                if(res.status==200)
                    context.commit('deleteProduct',id);
            })
    }
};
const getters={
    getListProduct(state){
        return state.listProduct;
    }
}

export default {
    state:state,
    mutations:mutations,
    actions:actions,
    getters:getters
}