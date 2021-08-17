const Boosts = require("../../app/models/Boosts");
const { isAccessGranted } = require("../auth");

const resourceName = "Boosts"

const properties = {
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },

};

const listProperties = [
    'surveyId', 'kyselyTitle', 'order', 'createdAt' ,'updatedAt'
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
    resource: Boosts,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};