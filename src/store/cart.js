import { observable, computed, action } from 'mobx';

export default class {
    @observable products = []

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.storage = this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');
    }

    @computed get productsDetailed() {
        return this.products.map((pr) => {
            let product = this.rootStore.products.getById(pr.id);
            return { ...product, cnt: pr.cnt };
        });
    }

    @computed get inCart() {
        return (id) => this.products.some((product) => product.id === id);
    }

    @computed get cartCnt() {
        return this.products.length;
    }

    @computed get total() {
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;
        }, 0).toFixed(2);
    }

    @action load() {
        let storageCart = this.storage.getItem('cart');
        this.products = storageCart != null ? JSON.parse(storageCart) : [];
    }

    @action save() {
        this.storage.setItem('cart', JSON.stringify(this.products));
    }

    @action add(id) {
        if (!this.inCart(id)) {
            this.products.push({ id, cnt: 1 });
            this.save();
        }
    }

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id);

        if (index !== -1) {
            this.products[index].cnt = cnt;
            this.save();
        }
    }

    @action remove(id) {
        if (this.inCart(id)) {
            let index = this.products.findIndex((pr) => pr.id === id);
            this.products.splice(index, 1);
            this.save();
        }
    }

    @action clean() {
        this.products = [];
        this.save();
    }
}
