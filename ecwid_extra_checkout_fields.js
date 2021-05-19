// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add new text field to shipping address section at checkout
ec.order.extraFields.street = {
    'title': 'Street',
    'titleTranslated': {
        'en': 'Street',
        'he': 'רחוב',
        'ru': 'Улица'
    },
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

// Add new text field to shipping address section at checkout
ec.order.extraFields.bulding_num = {
    'title': 'Building',
    'titleTranslated': {
        'en': 'Building',
        'he': 'בית',
        'ru': 'Дом'
    },
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};

// Add new text field to shipping address section at checkout
ec.order.extraFields.entry_num = {
    'title': 'Entry',
    'titleTranslated': {
        'en': 'Entry',
        'he': 'כניסה',
        'ru': 'Подъезд'
    },
    'type': 'text',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

// Add new text field to shipping address section at checkout
ec.order.extraFields.floor_num = {
    'title': 'Floor',
    'titleTranslated': {
        'en': 'Floor',
        'he': 'קומה',
        'ru': 'Этаж'
    },
    'type': 'text',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

// Add new text field to shipping address section at checkout
ec.order.extraFields.flat_num = {
    'title': 'Flat',
    'titleTranslated': {
        'en': 'Flat',
        'he': 'דירה',
        'ru': 'Квартира'
    },
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'shipping_address'
};


Ecwid.refreshConfig();