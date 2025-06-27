const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/send-quote', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thokozanigeorgee@gmail.com', // Sender email
      pass: 'gmt@Slows32' // Use an app password, not your real password
    }
  });

  let mailOptions = {
    from: email,
    to: 'thokozanigeorgee@gmail.com',
    subject: 'New Quote Request',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});