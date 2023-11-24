import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const ventaSchema = new Schema({
  cantidad:{
    type:Number,
    trim:true,
    default:0
  },
  fecha_venta:{
    type: Date, 
    required: [false],
  },
  precio_total:{
    type:Number,
    trim:true,
    default:0
  }
  
},
{
    timestamps:true
}
);

export default models.Venta || model('Venta',ventaSchema);