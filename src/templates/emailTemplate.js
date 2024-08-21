export const  emailTemplate = (name, email, message,subject,phoneNumber) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New   Contact Form Submission</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
      "
    >
      <p style="margin-bottom: 10px ; font-size:24px ; font-weight:600">${subject}</p>

      <p style="margin-bottom: 10px">${ message }</p>

      <p style="margin-bottom: 10px">Regards</p>

      <div
        style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px"
      >
        <p style="margin-bottom: 5px"><strong>${ name }</strong></p>
        <p style="margin-bottom: 5px">${ email }</p>
        <p>${ phoneNumber }</p>
      </div>
    </div>
  </body>
</html>


`;


export default emailTemplate

