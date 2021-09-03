const Socials = require("../../app/models/Socials");
const { isAccessGranted } = require("../auth");

const resourceName = "Socials"

const properties = {
    updatedAt: {
        isVisible: { edit: false, show: true, list: true },
      },
    createdAt: {
        isVisible: { edit: false, show: true, list: true },
    },

};

const listProperties = [
    'socialId', 'userId', 'liked', 'shared' ,'closed', 'expanded', 'updatedAt'
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
    resource: Socials,
    options: {
        properties,
        actions,
        listProperties
    },
    features
};