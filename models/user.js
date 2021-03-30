const mongoose = require("mongoose"),
{ Schema } = require("mongoose"),
Subscriber = require("./subscriber")
userSchema = new Schema(
    {
        name: {
            first: {
                type: String,
                required: true
            },
            last: {
                type: String,
                required: true
            }
        },
        email : {
            type: String,
            required: true,
            unique: true
        },
        zipCode: {
            type: Number,
            min: [10000, "Zip code must be 5 digits"],
            max: 9999
        },
        password: {
            type: String,
            required: true
        },
        courses: [{type: mongoose.Schema.Types.ObjectId, ref: Course}], 
        subscribedAccount: {type: mongoose.Schema.Types.ObjectId, ref: Subscriber}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);