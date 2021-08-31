const Faqs = require("../../app/models/Faqs");
const { isAccessGranted } = require("../auth");

const resourceName = "Faqs"

const properties = {
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },
};


const listProperties = [
    'title', 'index', 'updatedAt', 'createdAt'
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
    resource: Faqs,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};