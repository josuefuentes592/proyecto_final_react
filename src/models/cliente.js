import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const clienteSchema = new Schema({
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
  ci:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"ci Obligatorio"]
  }
},
{
    timestamps:true
}
);

export default models.Cliente || model('Cliente',clienteSchema);