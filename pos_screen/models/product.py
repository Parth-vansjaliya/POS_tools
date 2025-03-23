from odoo import models, fields


class ProductProduct(models.Model):
    _inherit = 'product.product'

    def getFavoriteProducts(self):
        products = self.search([
            ('available_in_pos', '=', True), ('product_tag_ids.name', '=', 'Favorite')
        ])
        return products.ids

    def mark_favorite(self):
        tag_id = self.env['product.tag'].search([
            ('name', '=', 'Favorite')
        ], limit=1)
        if tag_id:
            self.product_tag_ids = [(4, tag_id.id)]

    def mark_not_favorite(self):
        tag_id = self.env['product.tag'].search([
            ('name', '=', 'Favorite')
        ], limit=1)
        if tag_id:
            self.product_tag_ids = [(3, tag_id.id)]
