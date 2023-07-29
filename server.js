// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);

// app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();

// // middleware
// app.use(express.json());
// app.use(cors());

// const contactEmail = nodemailer.createTransport//({
// //   service: 'gmail',
// //   auth: {
// //     user: "theofanakis.filippos@gmail.com",
// //     pass: ""
// //   },
// // });
// ({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     pass: process.env.WORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
//  });

// contactEmail.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`====Ready to Send messages ${success} ===`);
//   }
// });

// app.post("/contact",  (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     // to: "theofanakis.filippos@gmail.com",
//     to: process.env.EMAIL,
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error, data) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });

// const port = 3001;
// app.listen(port, () => {
//  console.log(`Server is running on port: ${port}`);
// });


//////////////////////////test//////////////////////


// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// require("dotenv").config();

// const port = 3001;
// app.listen(port, () => {
//  console.log(`Server is running on port: ${port}`);
// });

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     pass: process.env.WORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
//  });
 
//  transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
//  });



 
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
   type: "OAuth2",
   user: process.env.EMAIL,
   pass: process.env.WORD,
   clientId: process.env.OAUTH_CLIENTID,
   clientSecret: process.env.OAUTH_CLIENT_SECRET,
   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
 },
});
transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
 let mailOptions = {
  from: req.body.mailerState.name,
      // to: "theofanakis.filippos@gmail.com",
      to: process.env.EMAIL,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${req.body.mailerState.firstName}</p>
             <p>Lastname: ${req.body.mailerState.lastName}</p>
             <p>Email: ${req.body.mailerState.email}</p>
              <p>Phone: ${req.body.mailerState.phone}</p>
              <p>Message: ${req.body.mailerState.message}</p>`,
  //  from: `${req.body.mailerState.email}`,
  //  to: process.env.EMAIL,
  //  subject: `Message from: ${req.body.mailerState.email}`,
  //  text: `${req.body.mailerState.message}`,
 };

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

