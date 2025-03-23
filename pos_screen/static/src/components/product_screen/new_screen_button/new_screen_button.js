odoo.define('point_of_sale.new_screen_button', function (require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');
//    const { useListener } = require("@web/core/utils/hooks");
    const PosComponent = require('point_of_sale.PosComponent');

    class NewScreenButton extends PosComponent {
        setup() {
            super.setup();
        }

        showFavoriteProduct(){
            this.showScreen('NewFavoriteProductScreen')
        }

    }
    NewScreenButton.template = 'NewScreenButton';

    ProductScreen.addControlButton({
        component: NewScreenButton,
//        position: ['before', 'OrderlineCustomerNoteButton'],
        condition: function(){
            return true;
        }
    });

    Registries.Component.add(NewScreenButton);

    return NewScreenButton;
});