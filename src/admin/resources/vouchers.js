const Vouchers = require("../../app/models/Vouchers");
const { isAccessGranted } = require("../auth");

const resourceName = "Vouchers"

const properties = {
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },
    benefitType: { 
        availableValues:
            [
                { value: 'Alennus', label: 'Alennus' },
                { value: 'Lahjakortti', label: 'Lahjakortti' },
            ]
    },

};

const listProperties = [
    'voucherId', 'name', 'benefitType', 'benefitValue' ,'updatedAt', 'redeemed', 'redeemDate'
];

const actions = {
    list: {
        // Added the role policy
        isAccessible: isAccessGranted({
            resourceName,
            actionRequested: "list",
        }),
    },
    edit: {
        isAccessible: isAccessGranted({
            resourceName,
            actionRequested: "list",
        }),
    },
    //...etc
};

const features = [];

module.exports = {
    resource: Vouchers,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};