const RouletteItems = require("../../app/models/RouletteItems");
const { isAccessGranted } = require("../auth");

const resourceName = "RouletteItems"

const properties = {
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },
    couponType: { 
        availableValues:
            [
                { value: 'gold', label: 'Kulta' },
                { value: 'silver', label: 'Hopea' },
                { value: 'bronze', label: 'Pronssi' },
            ]
    },

};

const listProperties = [
    'name', 'couponType', 'voucherId'
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
};

const features = [];

module.exports = {
    resource: RouletteItems,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};