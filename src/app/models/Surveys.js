const { Schema, model } = require("mongoose");

const Surveys = new Schema({
    id: {
        type: Number,
        required: true
    },
    tyyppi: String,
    kyselyTitle: {
        type: String,
        required: true
    },
    pointCount: {
        type: Number,
        required: true
    },
    resetHours: Number,
    kysymykset: [{
        num: {
            type: Number,
            required: true
        },
        group: String,
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        choices: [String],
        min: Number,
        max: Number
    }]
},
    { strict: false, timestamps: true });

module.exports = model('Surveys', Surveys);