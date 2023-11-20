import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const productoSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"Nombre Obligatorio"]
  },
  precio:{
    type:Number,
    default:0
  }
},
{
    timestamps:true
}
);

export default models.Producto || model('Producto',productoSchema);