import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const detalle_ventaSchema = new Schema({
  cantidad:{
    type:Number,
    default:0
  },
  fecha: {
    type: Date, 
    required: [true, "Fecha obligatoria"],
  },
  precio_total:{
    type:Number,
    default:0
  },
},
{
    timestamps:true
}
);

export default models.Detalle_venta || model('Detalle_venta',detalle_ventaSchema);