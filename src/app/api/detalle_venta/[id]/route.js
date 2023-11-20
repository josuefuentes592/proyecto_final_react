import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Detalle_venta from '@/models/detalle_venta';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const detalle_venta= await Detalle_venta.findById(id);

        if(!detalle_venta){
            return NextResponse({
                mensaje:"ventas no encontrado"
            },{status:400})
        }
        return NextResponse.json({
        detalle_venta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}


export async function DELETE(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        console.log(id);
        const detalle_venta= await Detalle_venta.deleteOne({'_id':id});
        
        if(!detalle_venta){
            return NextResponse({
                mensaje:"ventas no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        detalle_venta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}



export async function PUT(request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        const id = params.id; 
        const detalle_ventaUpdated=await Detalle_venta.findByIdAndUpdate(id,data,{new:true});
        
        if(!detalle_ventaUpdated){
            return NextResponse({

                mensaje:"ventas no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            detalle_ventaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}