import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_PASS
    const recipient = process.env.CONTACT_TO_EMAIL || gmailUser || 'smartlinkbusinesssolution@gmail.com'

    if (!gmailUser || !gmailPass) {
      return Response.json(
        { success: false, message: 'Email delivery is not configured on this server yet.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    })

    const mailOptions = {
      from: gmailUser,
      to: recipient,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New contact request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return Response.json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Email send failed:', error)
    return Response.json(
      { success: false, message: 'Unable to send message right now. Please try again later.' },
      { status: 500 }
    )
  }
}
