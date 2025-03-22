import { NextRequest, NextResponse } from 'next/server';
import * as auth from '../../../../lib/auth';
import prisma from '../../../../lib/prismadb';
import { send_otp } from '@/@/app/lib/sms';
import { generate6DigitCode } from '@/@/app/lib/actions';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Missing credentials' },
                { status: 400 }
            );
        }

        const personnel = await prisma.personnel.findFirst({
            where: { email }
        });

        if (!personnel) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const isValidPassword = await auth.verifyPassword(password, personnel.password);

        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }


        // Check if ID exists
        const ifExists = await prisma.otp.findFirst({
            where: {
                personnelId: personnel.id,
            }
        })

        if (!ifExists) {
            // Create an OTP code
            const sixDigitCode = await generate6DigitCode();
            const otp = await prisma.otp.create({
                data: {
                    code: sixDigitCode.toString(),
                    personnelId: personnel.id,
                }
            })
            // Send sms otp
            await send_otp(personnel.phone, otp.code)
            return NextResponse.json({
                data: personnel,
                message: 'Success',
                status: 201
            }, { status: 201 })
        } else {
            // Create an OTP code
            const sixDigitCode = await generate6DigitCode();

            //  Find personnel and update
            const otp = await prisma.otp.update({
                where: {
                    personnelId: personnel.id
                },
                data: {
                    code: sixDigitCode.toString()
                }
            })

            // Send sms otp
            await send_otp(personnel.phone, otp.code)
            return NextResponse.json({
                data: personnel,
                message: 'Success',
                status: 201
            }, { status: 201 })
        }

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}