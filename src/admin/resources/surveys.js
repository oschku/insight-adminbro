const Surveys = require("../../app/models/Surveys");
const { isAccessGranted } = require("../auth");

const resourceName = "Surveys"

const properties = {
    'kysymykset.type': {
        availableValues:
            [
                { value: 'single', label: 'Valitse yksi' },
                { value: 'multi', label: 'Valitse usea' },
                { value: 'range', label: 'Arvosteluasteikko' },
                { value: 'text', label: 'Vapaa tekstikenttä' }
            ]
    },
    id: {
        isId: true
    },
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },

};

const listProperties = [
    'id', 'kyselyTitle', 'pointCount', 'kysymykset', 'createdAt' ,'updatedAt'
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
    resource: Surveys,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};