import { configure } from 'mobx';

import cartStore from './cart';
import productsStore from './products';
import orderStore from './order';
import notificationsStore from './notifications';
import * as products from '~/api/products';


class RootStore{
    constructor(){
        this.api = {
            products,
        };

        this.storage = localStorage;
        this.cart = new cartStore(this);
        this.products = new productsStore(this);
        this.order = new orderStore(this);
        this.notifications = new notificationsStore(this);
    }    
}

export default new RootStore();