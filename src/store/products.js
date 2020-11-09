import { observable, computed } from 'mobx';

class Products {
    @observable products = getProducts();

    @computed get productsMap() {

        let map = {};

        this.products.forEach((product, i) => {
            map[product.id.toString()] = i;
        });

        return map;
    }

    getProduct(id) {
        let index = this.productsMap[id];

        if(index === undefined){
            return null;
        }

        return this.products[index];
    }
}

export default new Products();

// server api
function getProducts() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
        }
    ];
}