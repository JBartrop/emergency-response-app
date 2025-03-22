import { NextRequest, NextResponse } from 'next/server';
import * as auth from '../../../../lib/auth';
import prisma from '../../../../lib/prismadb';
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const otp = await prisma.otp.findFirst({
            where: {
                code: body.otp
            }
        })
        if (!otp) {
            return NextResponse.json({ message: "Wrong Code", status: 501 }, { status: 501 })
        }
        console.log("Starting")
        const token = await auth.generateToken({
            userId: body.id,
            rank: body.rank,
            phone: body.phone
        });
        if (!token) return NextResponse.json({ message: "Oomale" });
        console.log(token)
        return NextResponse.json(
            { token },
            {
                status: 201,
                headers: {
                    'Set-Cookie': `auth=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`
                }
            }
        );
    } catch (error) {
        console.error('Error during OTP verification:', error);
        return NextResponse.json({ error: error, message: "Failed" }, { status: 500 })
    }
}