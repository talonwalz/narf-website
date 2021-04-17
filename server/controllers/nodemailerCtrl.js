// import nodemailer
const nodemailer = require('nodemailer')

// import environment variables for your email
const { EMAIL, PASSWORD } = process.env


module.exports = {
    emailFromUs: async (req, res) => {
        const { email, title, image } = req.body

        const message = 'Thank you for reaching out, we will give you a call within 1-2 business days!'
        const name = 'Tarrin Walz'

        try {
// invoke the create transport function passing in your email information

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });
//invoke the sendMail function with the info in the email
            let info = await transporter.sendMail({
                from: `'${name}' <${EMAIL}>`, //This will show up when you go into the email
                to: email,
                subject: title, //This will show on the subject of the email
                text: message, //for clients with plaintext support only
                html: `<div>${message}</div>
                    <img src="cid:unique@nodemailer.com"/>
                    <h2>Tarrin Walz Owner</h2>`,
                attachments: [
                    {
                    filename: 'license.txt',
                    path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                    },
                    { //this is the embedded image
                        cid: 'unique@nodemailer.com', //same cid value as in the html img src
                        path:image
                    }
                ]

            }, (err, res) => {
                if (err) {
                    console.log('err', err)
                } else {
                    console.log('res', res)       
                    res.status(200).send(info)
                }
            })
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    emailUs: async (req, res) => {
        const { name, message, email, title, image } = req.body

        try {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });
            let info = await transporter.sendMail({
                from: `'${name}' <${email}>`, 
                to: EMAIL,
                subject: title, 
                text: message, 
                html: `<div>${message}</div>
                    <img src="cid:unique@nodemailer.com"/>`,
                attachments: [
                    {
                    filename: 'license.txt',
                    path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                    },
                    { 
                        cid: 'unique@nodemailer.com', 
                        path:image
                    }
                ]

            }, (err, res) => {
                if (err) {
                    console.log('err', err)
                } else {
                    console.log('res', res)       
                    res.status(200).send(info)
                }
            })
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}


 