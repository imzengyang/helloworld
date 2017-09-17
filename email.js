const nodemailer = require('nodemailer');

let mailinfo = require('./config.json')

let userinfo = mailinfo.userinfo

let sendmailinfo = mailinfo.sendmailinfo

let authemail  = nodemailer.createTransport(userinfo)

authemail.sendMail(sendmailinfo,function(err,info){
    if(err){
        console.log(err)
    }
    console.log("send..")
})
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// nodemailer.createTestAccount((err, account) => {

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.163.com',
//         port: 465,
//         secure: true, // true for 465, false for other ports
//         auth: {
//             user: "15599098746@163.com", // generated ethereal user
//             pass: "***"  // generated ethereal password
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"Fred Foo 👻" <15599098746@163.com>', // sender address
//         to: '3378074761@qq.com', // list of receivers
//         subject: 'Hello ✔', // Subject line
//         text: 'Hello world?', // plain text body
//         html: '<b>Hello world?</b>' // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//         console.log("发送成功！！")
//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     });
// });