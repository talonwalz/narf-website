// import nodemailer
const nodemailer = require('nodemailer')

// import environment variables for your email
const { EMAIL, PASSWORD } = process.env

module.exports = {

    
    

    emailFromUs: async (req, res) => {
        const { first, last, email } = req.body

        // const image = "https://images.unsplash.com/photo-1434596922112-19c563067271?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGh5c2ljYWwlMjB0aGVyYXB5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        const message = `Thank you ${first} ${last} for reaching out, we will give you a call within 1-2 business days!`
        const name = 'Northern Arizona Rehab & Fitness'
        const title = 'Northern Az Rehab & Fitness'

        try {
            // invoke the create transport function passing in your email information

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            }) ;
            //invoke the sendMail function with the info in the email

            let info = await transporter.sendMail({
                from: `'${name}' <${EMAIL}>`, //This will show up when you go into the email
                to: email,
                subject: title, //This will show on the subject of the email
                text: message, //for clients with plaintext support only
                html: `  
                    <p style="font-size: 16px;" >${message}</p>                    
                    <h2 style="font-family: serif; color: black;" >Tarrin Walz Owner</h2>
                    <h2 style="color: #19818E; font-family: cursive; font-weight: bold; " >Northern Arizona Rehabilitation & Fitness</h2>
                    `,
                // attachments: [
                    // {
                    // filename: 'logoIcon.png',
                    // path: 'images',
                    // cid: 't@t.com'
                    // },
                    // { //this is the embedded image
                    //     cid: 'unique@nodemailer.com', //same cid value as in the html img src
                    //     path: 'images'
                    // }
                // ]

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
        const { first, last, phone, message, email, subject } = req.body
        const ourEmail = 'ncdc5@yahoo.com'

        // const image = "https://images.unsplash.com/photo-1434596922112-19c563067271?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGh5c2ljYWwlMjB0aGVyYXB5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"

        try {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });
            let info = await transporter.sendMail({
                from: `'${first} ${last}' <${email}>`, 
                to: ourEmail,
                subject: subject, 
                text: message, 
                // <img src=${image}/>
                html: `  
                    <h3>${first} ${last}</h3>
                    <h4>phone number: ${phone}</h4>
                    <h4>email: ${email}</h4>
                    <p>message: ${message}</p>
                    `,
                    // <img src="cid:walztalon.com"/>
                    // attachments: [
                    // {
                    // filename: 'license.txt',
                    // path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                    // },
                    // { 
                    //     cid: 'walztalon@gmail.com', 
                    //     path:image
                    // }
                // ]

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


 