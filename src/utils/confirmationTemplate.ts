export const confirmationTemplate = (name: string): string => `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.7; font-size: 16px; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
    <h2 style="color: #007BFF; margin-top: 0; margin-bottom: 20px;">Hi ${name},</h2>

    <p style="margin: 0 0 16px;">
      Thank you for getting in touch through my portfolio.
    </p>

    <p style="margin: 0 0 16px;">
      I have received your message and will get back to you as soon as I can.
    </p>

    <p style="margin: 0 0 20px;">
      You can also explore more about my work below.
    </p>

    <a
      href="https://patriciasegantine.vercel.app/"
      style="display: inline-block; margin-bottom: 18px; padding: 12px 20px; color: #ffffff; background-color: #007BFF; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600;"
    >
      Visit My Portfolio
    </a>

    <p style="margin: 0 0 24px; font-size: 14px; color: #666;">
      <a href="https://www.linkedin.com/in/patriciasegantine" style="color: #007BFF; text-decoration: none;">LinkedIn</a>
      &nbsp;•&nbsp;
      <a href="https://github.com/patriciasegantine" style="color: #007BFF; text-decoration: none;">GitHub</a>
    </p>

    <p style="color: #666; font-size: 14px; margin: 0;">
      Best regards,<br />
      <strong style="color: #333;">Patricia Segantine</strong><br />
      Frontend Engineer
    </p>
  </div>
`;
