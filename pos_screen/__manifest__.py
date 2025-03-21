# -*- coding: utf-8 -*-
{
    'name' : 'Point of Sale tools',
    'version' : '16.0.1.0.0',
    'summary': 'Point of sale screen improvement.',
    'sequence': 1,
    'description': """Point of sale Sample""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'point_of_sale'],
    'data': [],
    'installable': True,
    'application': True,
    'assets': {
        'point_of_sale.assets': [
            'pos_screen/static/src/components/**/*.js',
            'pos_screen/static/src/components/**/*.xml',
            'pos_screen/static/src/components/**/*.scss',
        ]
    },
}