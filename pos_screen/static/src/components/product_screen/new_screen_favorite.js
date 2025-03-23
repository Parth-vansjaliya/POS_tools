odoo.define('point_of_sale.new_screen_favorite', function (require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const { useState, onWillStart } = owl;
    const PosComponent = require('point_of_sale.PosComponent');

    class NewFavoriteProductScreen extends PosComponent {
        setup() {
            super.setup();
            this.state = useState({
                activeProduct: {},
                isFavorite: true,
                favorite_products : [],
                products : [],
            })

            this.date = new Date().toUTCString();

            onWillStart (async ()=> {
                this.state.favorite_products = await this.env.pos.favorite_products
                this.getProducts()
            })

        }

        getProducts(){
            let products = this.env.pos.db.product_by_id;
            let product_list = []

            if (this.state.isFavorite) {
                this.state.favorite_products.forEach(p => product_list.push(products[p]))
            } else {
                Object.entries(products).forEach(p => product_list.push(p[1]))
            }

            this.state.isFavorite = !this.state.isFavorite
            this.state.products = product_list
        }

        setActiveProduct(product){
            this.state.activeProduct = product;
        }

        async markFavorite(product){
            await this.rpc({
                model: 'product.product',
                method: 'mark_favorite',
                args: [[product.id]]
            })

            await this.env.pos.setFavoriteProducts()
            this.state.favorite_products = await this.env.pos.favorite_products
            this.getProducts()
        }

        async markNotFavorite(product){
            await this.rpc({
                model: 'product.product',
                method: 'mark_not_favorite',
                args: [[product.id]]
            })

            await this.env.pos.setFavoriteProducts()
            this.state.favorite_products = await this.env.pos.favorite_products
            this.getProducts()
        }

    }
    NewFavoriteProductScreen.template = 'NewFavoriteProductScreen';

    Registries.Component.add(NewFavoriteProductScreen);

    return NewFavoriteProductScreen;
});