'use server';

import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });

async function sendEmail(fullname: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: parseInt(process.env.NODEMAILER_PORT!),
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.USER_MAILER,
      to: process.env.USER_TO || siteConfig.links.email.replace('mailto:', ''),
      subject: `${fullname.replace(/[\r\n]/g, ' ')} sent you a message`,
      html: `
      <h1>Message from ${escapeHtml(fullname)}</h1>
      <p>Email: ${escapeHtml(email)}</p>
      <p>${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>
      `,
      text: `Message from ${fullname}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return {
      success: "Message sent successfully, I'll get back to you soon. 🤖",
    };
  } catch (error: any) {
    return {
      error:
        'There seems a problem with the email service, please try again later. 🤖',
    };
  }
}

export async function sendMessageServerAction(
  _previousState: any,
  formData: FormData
) {
  // Validate inputs first
  const nameValue = formData.get('fullname');
  const emailValue = formData.get('email');
  const messageValue = formData.get('message');
  const fullname = typeof nameValue === 'string' ? nameValue.trim() : '';
  const email = typeof emailValue === 'string' ? emailValue.trim() : '';
  const message = typeof messageValue === 'string' ? messageValue.trim() : '';

  // validate fullname
  if (fullname.length <= 2 || fullname.length > 120) {
    return {
      fullnameError:
        'Wow, your name seems to be in stealth mode! 😄 How about unleashing the full version this time?',
    };
  }

  // validate email using regex
  if (email.length > 254 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      emailError:
        'Oops! Looks like your email just threw a curveball at my regex skills 😅. Let’s give it another shot—what do you say?',
    };
  }

  // validate message
  if (message.length <= 10 || message.length > 5000) {
    return {
      messageError: 'That’s a bit brief! 😅 Let it flow—share the whole story!',
    };
  }

  // If validation passes, try to send email
  try {
    const response = await sendEmail(fullname, email, message);
    console.log('Response: ', response);
    if (response.success) {
      return {
        success: "Message sent successfully, I'll get back to you soon. 🤖",
      };
    }
    return {
      error: 'Something went wrong, please try again later. 🤖',
    };
  } catch (error: any) {
    return {
      error: 'Something went wrong, please try again later. 🤖',
    };
  }
}
