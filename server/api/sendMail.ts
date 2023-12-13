import { Resend } from 'resend';
const resend = new Resend('re_3qPivrvy_PoBXZ2iGYegxHC1LX4WzZcxL');
// const resend = new Resend(process.env.EMAIL_KEY);
// console.log(process.env.EMAIL_KEY)
const useEnvEmail = process.env.EMAIL_ADDRESS
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'support@logistfreight.com',
            subject: body?.subject,
            html: body?.message,
        });
        return data;
    } catch (error) {
        return { error };
    }
});