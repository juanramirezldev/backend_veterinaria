import mongoose from "mongoose";
import generarId from "../helpers/generarId.js"

const VeterinariosSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    telefono:{
        type:String,
        default:null,
        trim:true
    },
    web:{
        type:String,
        default:null
    },
    token:{
        type:String,
        default: generarId()
    },
    tokenPwd:{
        type:String,
        default: generarId()
    
    },
    confirmado:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true
})

const Veterinario = mongoose.model("Veterinario", VeterinariosSchema)

export default Veterinario