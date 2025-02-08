export const personalInboxTemplate = (name: string, email: string, message: string): string => `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; font-size: 16px; padding: 20px; border-radius: 8px; border: 1px solid #eee;">
    <h2 style="color: #007BFF;">📨 New message from your Portfolio</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></p>
    <hr style="border: none; border-top: 1px solid #ddd;" />
    <p><strong>Message:</strong></p>
    <blockquote style="font-style: italic; color: #555; border-left: 4px solid #007BFF; padding-left: 12px;">${message}</blockquote>
    <p style="color: #666; font-size: 14px; margin-top: 20px;">
      This message was sent through the contact form on your portfolio website.
    </p>
  </div>
`;
