import sgMail from "@sendgrid/mail";
import { fail, type ActionFailure, type Actions } from "@sveltejs/kit";

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_KEY);

type ActionResponse = {
  success: boolean;
};

export const actions: Actions = {
  default: async ({ request }): Promise<ActionResponse | ActionFailure<{ error: string }>> => {
    console.log("Sending email...");
    const formData = await request.formData();
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const name = formData.get("name")?.toString() || "";
    const recaptchaToken = formData.get("recaptcha-token")?.toString() || "";

    console.log(recaptchaToken);

    if (!email || !subject || !message || !name) {
      return fail(400, { error: "Missing required fields" });
    }

    if (!recaptchaToken) {
      return fail(400, { error: "no reCaptcha token" });
    }

    try {
      const recaptchaResponse = await fetch(
        `https://recaptchaenterprise.googleapis.com/v1/projects/youth-mental-hea-1719860454165/assessments?key=${import.meta.env.VITE_RECAPTCHA_SECRET_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: {
              token: recaptchaToken,
              siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
              expectedAction: "SUBMIT",
            },
          }),
        },
      );
      console.log(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

      const recaptchaResult = await recaptchaResponse.json();
      console.log(recaptchaResponse);
      console.log(recaptchaResult);

      if (!recaptchaResult.tokenProperties?.valid || recaptchaResult.riskAnalysis?.score < 0.5) {
        return fail(400, { error: "reCAPTCHA verification failed" });
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return fail(500, { error: "An error occurred during verification" });
    }

    const msg = {
      to: "tucker@reddoorla.com",
      from: "tucker@reddoorla.com",
      replyTo: {
        name: name,
        email: email,
      },
      subject: subject,
      text: message,
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent");
      return { success: true };
    } catch (error) {
      console.error(error);
      return fail(500, { error: "Failed to send email" });
    }
  },
};

export const prerender = false;
