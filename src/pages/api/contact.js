export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Here you would integrate with an email service
    // For now, I'll show you how to set it up with EmailJS or similar
    // You can also use services like SendGrid, Mailgun, or Nodemailer with Gmail

    // Example with EmailJS (you'll need to install emailjs-com)
    // You can also use a backend service like SendGrid or Mailgun

    // For demonstration, I'll create a simple response
    // In production, you'd actually send the email here

    const emailData = {
      to: 'contact@intellipeaks.com',
      from: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // TODO: To implement actual email sending, you can:
    // 1. Use SendGrid: https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/
    // 2. Use Mailgun: https://documentation.mailgun.com/en/latest/quickstart-sending.html
    // 3. Use Nodemailer with Gmail: https://nodemailer.com/usage/using-gmail/

    console.log('Contact form submission:', emailData);
    console.log('Email would be sent to: contact@intellipeaks.com');

    // For now, we'll simulate success
    // In production, replace this with actual email sending logic
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
}
