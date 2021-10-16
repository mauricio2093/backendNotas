import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const notaShema=new Schema({

    nombre:{type:String, required:[true,'Nombre obligatorio']},
    correo:{type:String, required:[true,'Correo obligatorio']},
    contraseña:{type:String, requiere:[true,'Contraseña Obligatoria']},
    date:{type:Date, default: Date.now},
    activo:{type:Boolean, default:true}

});

//convertir a modelo
const Login=mongoose.model('Login',notaShema);
export default Login;