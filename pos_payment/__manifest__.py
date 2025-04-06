# -*- coding: utf-8 -*-
{
    'name' : 'Point of Sale tools',
    'version' : '16.0.1.0.0',
    'summary': 'Point of sale Payment Screen improvement.',
    'sequence': 1,
    'description': """Point of sale Payment Screen""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'point_of_sale'],
    'data': [],
    'installable': True,
    'application': True,
    'assets': {
        'point_of_sale.assets': [
            'pos_payment/static/src/components/**/*.js',
            'pos_payment/static/src/components/**/*.xml',
            'pos_payment/static/src/components/**/*.scss',
        ]
    },
}