import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const categoriaSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"categoria Obligatorio"]
  }
},
{
    timestamps:true
}
);

export default models.Categoria || model('Categoria',categoriaSchema);