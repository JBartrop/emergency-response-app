export function generate6DigitCode(): number {
    const code = Math.floor(Math.random() * 900000) + 100000;
    return code;
}


