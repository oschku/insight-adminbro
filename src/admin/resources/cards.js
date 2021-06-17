const Cards = require("../../app/models/Cards");
const { isAccessGranted } = require("../auth");

const resourceName = "Cards"

const properties = {
    tyyppi: {
        availableValues:
            [
                { value: 'Voucher', label: 'Kuponki' },
                { value: 'Feed', label: 'Uutisartikkeli' },
                { value: 'Vastaa', label: 'Kyselyn kortti' }
            ]
    },
    id: {
        isId: true
    },
    benefitType: { 
        availableValues:
            [
                { value: 'Alennus', label: 'Alennus' },
                { value: 'Lahjakortti', label: 'Lahjakortti' },
            ]
    },
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },

};

const listProperties = [
    'id', 'tyyppi', 'name', 'formTitle', 'picUrl', 'createdAt' ,'updatedAt'
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
    resource: Cards,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};