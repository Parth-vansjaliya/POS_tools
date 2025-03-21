odoo.define('pos_screen.product_scr', function (require){
    'use strict';

    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require("@web/core/utils/hooks");
    const PosComponent = require('point_of_sale.PosComponent');

    class OrderLineColorChange extends PosComponent {
        setup() {
            super.setup();
            useListener('click', this.onClick);
        }
        async onClick() {
            console.log('this is color change button')
            const selectedOrderline = this.env.pos.get_order().get_selected_orderline();
//            if (selectedOrderline) {
//                console.log(selectedOrderline)
//            }
//            const { confirmed, payload: inputNote } = await this.showPopup('TextAreaPopup', {
//                startingValue: selectedOrderline.get_customer_note(),
//                title: this.env._t('Add Customer Note'),
//            });
//
//            if (confirmed) {
//                selectedOrderline.set_customer_note(inputNote);
//            }
        }
    }
    OrderLineColorChange.template = 'OrderLineColorChange';

    ProductScreen.addControlButton({
        component: OrderLineColorChange,
        position: ['after', 'OrderlineCustomerNoteButton'],
    });

    Registries.Component.add(OrderLineColorChange);

    return OrderLineColorChange;
});