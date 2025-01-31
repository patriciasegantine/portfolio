export const confirmationTemplate = (name: string): string => `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.8; font-size: 16px; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
    <h2 style="color: #007BFF;">Hello, ${name}!</h2>
    <p> Thank you for reaching out through my portfolio! </p>
    
    <p>
    Your message has been received,
      and I will get back to you as soon as possible. If it is urgent, feel free to send
      a follow-up email or check out my work on the website.
    </p>
    
    <a href="https://patriciasegantine.vercel.app/"
       style="display: inline-block; margin-top: 20px; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px; font-size: 14px;">
      Visit My Portfolio
    </a>

    
    <p style="color: #666; font-size: 14px; margin-top: 10px;">
      Best regards, <br />
      <strong>Patricia Segantine</strong> <br />
      Front-end Developer
    </p>
  </div>
`;
