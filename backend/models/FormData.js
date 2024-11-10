const mongoose = require("mongoose")

const FormDataSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    first_question: {
        type: String,
        required: true
    },
    second_question: {
        type: Object,
        required: true
    }
}, {timestamps: true})

const UserFormResponse = mongoose.model("user_form_responses", FormDataSchema)

module.exports = UserFormResponse