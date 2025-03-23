/** @odoo-module */

import Registries from "point_of_sale.Registries"
import { PosGlobalState } from "point_of_sale.models"

const PosGlobalStateInherited = (models) => class extends models {
    constructor(obj) {
        super(obj);
        this.favorite_products = this.getFavoriteProducts()
        this.popupMessage = ""
    }

    async getFavoriteProducts(){
        const product_data = await this.env.services.rpc({
            model: 'product.product',
            method: 'getFavoriteProducts',
            args: [{}]
        })

        return product_data
    }

    async setFavoriteProducts(){
        this.favorite_products = await this.getFavoriteProducts()
    }

}

Registries.Model.extend(PosGlobalState, PosGlobalStateInherited)

