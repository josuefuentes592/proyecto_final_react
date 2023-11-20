import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Detalle_venta from '@/models/detalle_venta';




export async function GET(){
    try {
        await connectDB();
        const detalle_venta= await Detalle_venta.find();
        return NextResponse.json({
        detalle_venta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newDetalle_venta = new Detalle_venta(data); 
        const respuesta = await newDetalle_venta.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}