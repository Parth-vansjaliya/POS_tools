/** @odoo-module **/

import Registries from 'point_of_sale.Registries';
import ProductScreen from 'point_of_sale.ProductScreen';
const { onWillStart } = owl

export const ProductScreenPOSInherit = (ProductScreen) =>
    class extends ProductScreen {

        setup() {
            super.setup();
            console.log('services', this.env.pos.db)
            this.favorite_products = []
            this.product_tag_id = null

            onWillStart(async ()=> {

            const tag_id = await this.get_product_tag();
            this.product_tag_id = tag_id[0] ? tag_id[0] : null;
//            console.log('tag_id', this.product_tag_id)

            const data = await this.env.services.rpc({
                'model': 'product.product',
                'method': 'search',
                'kwargs': {
                    'domain': [['available_in_pos', '=', true], ['product_tag_ids.name', '=', 'Favorite']]
                }
            })
            this.favorite_products = data
//                this.favorite_products = await this.env.pos.favorite_products
            })

        }

        get favoriteProducts(){
            let products = this.env.pos.db.product_by_id;
            let tag_id = this.product_tag_id
//            let products = this.env.pos.db.get_product_by_category(4);
//            console.log("Products", products)
//            console.log("Products", this.env.pos.favorite_products)
            let favorites = []
            this.favorite_products.forEach(p => favorites.push(products[p]))
            return favorites
        }

        async get_product_tag() {
            const params = {
                model: 'product.tag',
                method:'search',
                kwargs: {
                    'domain': [['name', '=', 'Favorite']]
                },
            };

            const product_tag_id = await this.env.services.rpc(params);
            return product_tag_id
        }

    }

Registries.Component.extend(ProductScreen, ProductScreenPOSInherit)

