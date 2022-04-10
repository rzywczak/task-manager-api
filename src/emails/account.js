const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ziolo420.420@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ziolo420.420@gmail.com',
        subject: 'Cancelation email',
        text: `Goodbye, ${name}. I hope to see you back sometime soon. `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}