const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ar646976kumar@gmail.com',
        subject:'Thanks for joining',
        text:`Welcome to the app ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ar646976kumar@gmail.com',
        subject:'Sorry',
        text:`hope to see u again`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail

}