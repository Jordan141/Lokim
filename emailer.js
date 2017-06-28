let nodemailer = require("nodemailer");

let smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'lokimdebug@gmail.com',
        pass: 'ShittyPassword123'
    }
})

let rand, mailOptions, host, link;

const send = (req,res) => {
    rand = Math.floor((Math.random() * 100) + 54)
    host = req.get('host')
    link = `https://${req.get('host')}/verify?id=${rand}`
    mailOptions= {
        to: req.query.to,
        subject: 'Please confirm your Email account',
        html: `Hello,<br> Please Click on the link to verify your email.<br><a href="${link}">Click here to verify</a>`
    }
    console.log(mailOptions)
    smtpTransport.sendMail(mailOptions, (err,res) => {
        if(err){
            console.log(err)
            res.end(`error`)
        }
        console.log(`Message sent: ${res.message}`)
        res.end('sent')
    })
}

const verify = (req,res) => {
    console.log(`${req.protocol}:/${req.get('host')}`)
    if(`${req.protocol}://${req.get('host')}` === `http://${host}`){
        console.log("Domain is matched. Information is from authentic email");
        if(req.query.id==rand)
        {
        console.log('email is verified');
        res.end(`<h1>Email ${mailOptions.to} has been successfully verified`);
        }
        else
        {
        console.log('email is not verified');
        res.end('<h1>Bad Request</h1>');
        }
    }
    else
    {
    res.end('<h1>Request is from unknown source</h1>');
    }
}

module.exports = {
    send: send,
    verify: verify
}