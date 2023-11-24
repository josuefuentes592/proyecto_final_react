import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const InventarioSchema = new Schema({
  nombre_articulo:{
    type:String,
    unique:false,
    trim:true,
    required:[true,"Nombre del articulo Obligatorio"]
  },
  stock:{
    type:Number,
    trim:true,
    default:0
  },
  proveedor:{
    type:String,
    unique:false,
    trim:true,
    required:[false]
  },
  precio_compra:{
    type:Number,
    trim:true,
    default:0
  },
  precio_venta:{
    type:Number,
    trim:true,
    default:0
  },
  fecha_adquirido:{
    type: Date, 
    required: [true, "Fecha de la adquisicion obligatoria"],
  }
},
{
    timestamps:true
}
);

export default models.Inventario || model('Inventario',InventarioSchema);