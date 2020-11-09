import {observable, computed, action} from 'mobx';
import productsModel from '~s/products.js';

class Cart{
    @observable items = []

    @computed get total(){
        return this.items.reduce((t, item) =>{
            return t + productsModel.getProduct(item.id).price * item.count
        }, 0);
    }

    @computed get count(){
        return this.items.reduce((tc, i) => tc + i.count, 0);
    }

    @computed get contains() {
        return (id) => this.items.some((item) => item.id == id);
    }

    @action add(productId){ 
        this.items.push({
            id: productId,
            count: 1
        });
    }

    @action change(i, cnt){
        this.items[i].count = cnt;
    }

    @action remove(productId){
        let index =  this.items.findIndex(item => item.id === productId);
        
        if (index != -1) {
            this.items.splice(index, 1);
        }
    }
}

export default new Cart();
