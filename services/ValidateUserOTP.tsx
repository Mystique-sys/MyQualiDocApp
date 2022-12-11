export default function ValidateUserOTP(code: string) {
    const myCode = "123456";
    return code === myCode;
}