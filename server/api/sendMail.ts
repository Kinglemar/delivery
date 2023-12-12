import { Resend } from 'resend';
import logger from './middleware/logger';
// const resend = new Resend(process.env.EMAIL_KEY);
console.log(process.env.EMAIL_KEY)
const useEnvEmail = process.env.EMAIL_ADDRESS
// export default defineEventHandler(async (event) => {
//     const body = await readBody(event)
//     logger(body)
//     logger(body)
//     try {
//         const data = await resend.emails.send({
//             from: 'onboarding@resend.dev',
//             to: `${useEnvEmail}`,
//             subject: body?.subject,
//             html: body?.message,
//         });
//         return data;
//     } catch (error) {
//         return { error };
//     }
// });