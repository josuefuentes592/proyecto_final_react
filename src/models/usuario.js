import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const UsuarioSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"Nombre Obligatorio"]
  },
  apellido:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"Apellido Obligatorio"]
  },
  imagen:{
    type:String,
    trim:true,
    required:[true,"Imagen Obligatoria"],
    default:'#'
  },
  correo:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"correo Obligatorio"]
  },
  contrasena:{
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

export default models.Usuario || model('Usuario',UsuarioSchema);