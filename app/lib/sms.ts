export async function send_otp(phone: string, otp: string) {
    try {
        const message = `Your otp is \n ${otp}`
        const url = `https://sms.arkesel.com/sms/api?action=send-sms&api_key=${process.env.NEXT_PUBLIC_ARKESEL_API_KEY}&to=${phone}&from=FIREOTP&sms=${message}`
        const response = fetch(url, {
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.NEXT_PUBLIC_ARKESEL_API_KEY || ''

            }
        });
        if (!response) {
            return 1
        } else {
            return 0
        }

    } catch (error) {
        return error
    }
}