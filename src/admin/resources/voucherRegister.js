const VoucherRegister = require("../../app/models/VoucherRegister");
const { isAccessGranted } = require("../auth");

const resourceName = "VoucherRegister"

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
    'voucherId', 'partnerId',  'benefitType', 'benefitValue', 'totalUnits' , 'valueTotal', 'totalUnitsRedeemed'
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
    resource: VoucherRegister,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};