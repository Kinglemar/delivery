import { Resend } from 'resend';
import logger from './middleware/logger';
const resend = new Resend(process.env.EMAIL_KEY);
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    logger(body)
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'itzhidef@gmail.com',
            subject: body?.subject,
            html: body?.message,
        });
        return data;
    } catch (error) {
        return { error };
    }
});