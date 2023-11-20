import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const usuarioSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"Nombre Obligatorio"]
  },
  apellido:{
    type:String,
    trim:true,
    required:[true,"Apellido Obligatoria"],
    default:'#'
  },
  correo:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"Correo Obligatorio"]
  },
  contraseña:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"contraseña Obligatorio"]
  }
},
{
    timestamps:true
}
);

export default models.Usuario || model('Usuario',usuarioSchema);