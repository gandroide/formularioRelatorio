const nodemailer = require('nodemailer')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  let transporter = nodemailer.createTransport({
    host: process.env.MAILJET_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILJET_USER, // generated ethereal user
      pass: process.env.MAILJET_PASS, // generated ethereal password
    },
  });

  const {
    cliente,
    morada,
    cp,
    localidade,
    solicitante,
    nipc,
    telefone,
    numeroObra,
    asistencia,
    instalacion,
    reparacion,
    presupuesto,
    desarrollo,
    detalles,
    utilizador,
    password,
    equipo,
    modelo,
    numeroSerie,
    tecnico,
    horaInicio,
    horaFin,
    deslocacion,
    totalHoras,
    totalKilometros,
    tecnico2,
    horaInicio2,
    horaFin2,
    deslocacion2,
    totalHoras2,
    totalKilometros2,
    diasUtiles,
    sabDomFer,
    nocturno,
    pendiente,
    concluido,
    campotexto,
    codigo,
    descripcion,
    qtd,
    carro,
    fecha
  } = JSON.parse(event.body)

  let info = await transporter.sendMail({
    from: '"Electro Flow" <relatorio.electroflow@gmail.com>', // sender address
    to: "administrativo@electroflow.com,flavio.figueira@electroflow.com", // list of receivers
    subject: `Data: ${fecha} Tecnico: ${tecnico} Cliente: ${cliente}`, // Subject line 
    html: `
    <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title> </title>
  <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
      .mj-column-per-25 {
        width: 25% !important;
        max-width: 25%;
      }
      .mj-column-per-33-333333333333336 {
        width: 33.333333333333336% !important;
        max-width: 33.333333333333336%;
      }
      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }
      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
</head>

<body style="background-color:#ccd3e0;">
  <div style="background-color:#ccd3e0;">
    <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:500px;"> <img alt="" height="auto" src="https://relatorio.netlify.app/electroFlow.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="500" /> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#356cc7;background-color:#356cc7;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#356cc7;background-color:#356cc7;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:18px;padding-left:25px;word-break:break-word;">
                      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:26px;line-height:1;text-align:center;color:#ABCDEA;">Relatorio de Serviço</div>
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
    <div style="background:#356cc7;background-color:#356cc7;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#356cc7;background-color:#356cc7;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:5px;padding-top:0;text-align:center;">
              <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                      <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                      <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                      <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Data</span> <br/></div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                      <div style="margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Dia de Serviço: ${fecha}</div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size:0px;padding:20px 0;padding-top:0;padding-bottom:5px;word-break:break-word;">
                      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                      <div style="background:#356cc7;background-color:#356cc7;margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#356cc7;background-color:#356cc7;width:100%;">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:5px;padding-top:0;text-align:center;">
                                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Requisitante</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Cliente: ${cliente}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Cp: ${cp}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Morada: ${morada}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Localidade: ${localidade}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Solicitante: ${solicitante}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">NIPC: ${nipc}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:150px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-25 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Telefone: ${telefone}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Num. Obra: ${numeroObra}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Pedido</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Assistência: ${asistencia}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Instalação: ${instalacion}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Reparação: ${reparacion}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Orçamento: ${presupuesto}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Desenvolvimento ${desarrollo}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Detalhes: ${detalles}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Caracteristicas do Equipamento</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Utilizador: ${utilizador}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Password: ${password}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Equipamento: ${equipo}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Marca/Modelo: ${modelo}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               align="center" class="" style=""
            >
          <![endif]-->
                                                  <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">N-Serie: ${numeroSerie}</div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Tecnico</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Nome: ${tecnico}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Inicio: ${horaInicio}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Fin: ${horaFin}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Deslocação: ${deslocacion}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Total Horas: ${totalHoras}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Total Kilometros: ${totalKilometros}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Tecnico 2</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Nome: ${tecnico2}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Inicio: ${horaInicio2}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Fin: ${horaFin2}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Deslocação: ${deslocacion2}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Total Horas: ${totalHoras2}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Total Kilometros: ${totalKilometros2}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Horario</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Dias Uteis 18/24: ${diasUtiles}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Sab/Dom/Fer: ${sabDomFer}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:200px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Nocturno: ${nocturno}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Pendiente: ${pendiente}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               align="center" class="" style=""
            >
          <![endif]-->
                                                  <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Concluido: ${concluido}</div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:28px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Descrição</span> <br/> <span style="font-size:15px">Detalhes:	${campotexto}</span></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Material Utilizado</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Codigo: ${codigo}</div>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Descrição: ${descripcion}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">QTD: ${qtd}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:28px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:20px; font-weight:bold">Carro</span> <br/></div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:20px 0;word-break:break-word;">
                                        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
                                        <div style="margin:0px auto;max-width:600px;">
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                            <tbody>
                                              <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                  <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
                                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                                      <tr>
                                                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                                          <div style="font-family:Helvetica;font-size:13px;line-height:1;text-align:center;color:#FFFFFF;">Matricula: ${carro}</div>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </div>
                                                  <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:20px;padding-bottom:0px;padding-left:20px;word-break:break-word;">
                                        <p style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:100%;"> </p>
                                        <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #ffffff;font-size:1px;margin:0px auto;width:560px;" role="presentation" width="560px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:20px;padding-right:25px;padding-bottom:20px;padding-left:25px;word-break:break-word;">
                                        <div style="font-family:Helvetica;font-size:15px;line-height:1;text-align:center;color:#FFFFFF;"><span style="font-size:15px">Electro Flow Team</span></div>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
                    </td>
                  </tr>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
</body>

</html>
    
    
    
    `, // html body 
  });

  return {statusCode: 200,
    body: JSON.stringify({mensaje: 'Seu relatório de serviço foi enviado!'})  
  }




}

module.exports = { handler }
