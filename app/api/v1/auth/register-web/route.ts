import { NextRequest, NextResponse } from 'next/server';
import * as auth from '../../../../lib/auth';
import prisma from '../../../../lib/prismadb';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            email,
            password,
            firstName,
            lastName,
            service_number,
            station_id,
            rank,
            phone,
        } = body;

        const hashedPassword = await bcrypt.hash(password, 12)
        const personnel = await prisma.personnel.create({
            data: {
                email,
                password: hashedPassword,
                service_number,
                station_id,
                rank,
                phone,
                firstName,
                lastName,

            }
        })
        console.log(personnel)
        if (!personnel) return NextResponse.json({ error: "Could not save the data", message: "Failed", status: 501 }, { status: 501 });

        return NextResponse.json({ data: personnel, messages: "Success", status: 201 }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error, message: "Failed", status: 500 }, { status: 500 })
    }
}