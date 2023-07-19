const mongoose = require("mongoose");

const usermasterschema = new mongoose.Schema({
    usermailid:{
        type:String,
        uniquq:[true,"This email already exists"],
        required:[true,"Email must be entered"]
    },
    username:{
        type:String,
        required:[true,"User must enter username"]
    },
    userpwd:{
        type:String,
        required:[true,"Please enter password"]
    },

});

const Register = new mongoose.model("Registers",usermasterschema);
module.exports = Register;