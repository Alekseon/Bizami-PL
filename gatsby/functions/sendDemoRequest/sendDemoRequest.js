const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

require("dotenv").config();

function generateOrderEmail({ name, phone, email, company, magSize, erp, quantity}) {
  return `
    <div>
      <h2>Prośba o demo na Bazami.pl</h2>
      <p>Imie i nazwisko: ${name}</p>
      <p>Telefon: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Firma: ${company}</p>
      <p>Liczba magazynów ${magSize}</p>
      <p>System ERP: ${erp}</p>
      <p>Liczba produktów: ${quantity}</p>
    </div>`;
}

const transporter = nodemailer.createTransport({
  
  host: `${process.env.GATSBY_MAIL_HOST}`,
  port: 587,
  secure: false,
  auth: {
    user: `${process.env.GATSBY_MAIL_USER}`,
    pass: `${process.env.GATSBY_MAIL_PASS}`
  }
});

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  // Validate the data coming in is correct
  const requiredFields = ['name', 'phone', 'email', 'company'];

  for (const field of requiredFields) {
    
    if (!body[field]) {
      return {
        statusCode: 400
      };
    }
  }

  try {
    // transporter.verify(function (error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(success);
    //   }
    // });

    
    const info = await transporter.sendMail({
      from: `kontakt@bizami.pl`,
      to: `${process.env.GATSBY_DEMO_FORM_RECEIVER}, a.pranschke@alekseon.com`,
      subject: 'Prosba o Demo na Bizami.pl',
      html: generateOrderEmail(body),
    });

    return {
      statusCode: 200,
    };
  } catch (error) {
    return {
      statusCode: 500, 
    };
  }
};


