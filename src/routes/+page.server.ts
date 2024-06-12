
import sgMail from '@sendgrid/mail';
import { fail, type ActionFailure, type Actions } from '@sveltejs/kit';

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_KEY);


type ActionResponse = {
  success: boolean;
};


export const actions: Actions = {
  default: async ({ request }): Promise<ActionResponse|ActionFailure<{ error: string; }>> => {
    const formData = await request.formData();

    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const name = formData.get('name')?.toString() || '';
    
    if(!email || !subject || !message ||!name) return fail(400, { error: 'Missing required fields' });

    const msg = {
      to: 'tucker@reddoorla.com',
      from: 'tucker@reddoorla.com',
      replyTo: {
        name: name,
        email: email,
      },
    
      subject: subject,
      text: message,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent');
      return { success: true };
    } catch (error) {
      console.error(error);
      return fail(500, { error: 'Failed to send email' });
    }
  },
};

export const prerender = false;