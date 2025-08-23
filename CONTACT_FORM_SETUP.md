# Contact Form Email Setup Guide

This guide will help you set up the contact form to send emails to `nafeelmannan@gmail.com` when users submit the form.

## What's Already Implemented

✅ Contact form with validation  
✅ EmailJS integration  
✅ Success/error message handling  
✅ Loading states  
✅ Form reset after successful submission  
✅ Styled messages (success/error)  
✅ Updated contact information to show your email  

## Setup Steps

### 1. EmailJS Account Setup

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**HTML Content:**
```html
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{from_phone}}</p>
<p><strong>Company:</strong> {{from_company}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<br>
<p><em>This email was sent from your website contact form.</em>
```

4. Save the template and note down your **Template ID**

### 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update the Code

In `src/components/Contact-form/contact-form.jsx`, replace these placeholder values:

```javascript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your actual public key
```

### 6. Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email at `nafeelmannan@gmail.com`

## Alternative Email Services

If you prefer not to use EmailJS, you can implement:

### Option 1: SendGrid (Recommended for Production)
- More reliable and scalable
- Better deliverability
- Requires backend API implementation

### Option 2: Mailgun
- Good for transactional emails
- Requires backend API implementation

### Option 3: Gmail SMTP with Nodemailer
- Free but limited
- Requires backend implementation
- Less reliable for production

## Current Implementation Details

- **Form Fields:** Name, Email, Phone, Company, Message
- **Required Fields:** Name, Email, Message
- **Email Recipient:** nafeelmannan@gmail.com
- **Success Message:** "Message sent successfully! We'll get back to you within 24 hours."
- **Error Handling:** Comprehensive error messages and validation
- **Loading States:** Button shows "Sending..." during submission
- **Form Reset:** Automatically clears form after successful submission

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error:**
   - Check your EmailJS credentials
   - Verify service and template IDs
   - Check browser console for detailed errors

2. **Form not submitting:**
   - Check if all required fields are filled
   - Verify EmailJS is properly loaded
   - Check browser console for JavaScript errors

3. **Emails not received:**
   - Check spam folder
   - Verify EmailJS service is active
   - Check EmailJS dashboard for delivery status

## Security Notes

- EmailJS public key is safe to expose in frontend code
- Service ID and template ID are also safe to expose
- Never expose private keys or API secrets in frontend code
- Consider rate limiting for production use

## Next Steps

1. Complete the EmailJS setup
2. Test the form thoroughly
3. Customize the email template as needed
4. Consider adding CAPTCHA for production use
5. Monitor email delivery and spam reports

## Support

If you encounter issues:
1. Check EmailJS documentation
2. Review browser console for errors
3. Verify all credentials are correct
4. Test with a simple email template first
