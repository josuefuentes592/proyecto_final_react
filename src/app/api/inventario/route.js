import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Inventarios from '@/models/inventario';




export async function GET(){
    try {
        await connectDB();
        const inventarios= await Inventarios.find();
        return NextResponse.json({
        inventarios
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
        const newInventario = new Inventarios(data); 
        const respuesta = await newInventario.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}