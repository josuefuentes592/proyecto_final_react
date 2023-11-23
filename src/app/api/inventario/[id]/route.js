import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Inventarios from '@/models/inventario';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const inventarios= await Inventarios.findById(id);

        if(!inventarios){
            return NextResponse({
                mensaje:"Producto no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        inventarios
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
        const inventarios= await Inventarios.deleteOne({'_id':id});
        
        if(!inventarios){
            return NextResponse({
                mensaje:"Producto no encontrado"
            },{status:400})
        }

        return NextResponse.json({
        inventarios
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
        const inventarioUpdated=await Inventarios.findByIdAndUpdate(id,data,{new:true});
        
        if(!inventarioUpdated){
            return NextResponse({

                mensaje:"Producto no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            inventarioUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}