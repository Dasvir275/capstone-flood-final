exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://capstone-flood-final.vercel.app"><img class="logo"
                    src="https://www.ias4sure.com/wp-content/uploads/2017/03/ias4sure.com-Central-Water-Commission-300x295.png" alt="MATSYA PORTAL"></a>
            <div class="message">Contact Form Confirmation</div>
            <div class="body">
                <p>Dear ${firstname} ${lastname},</p>
               <p style="color: #333; font-size: 18px; line-height: 1.6;">
        <span style="color: #e63946; font-weight: bold;">Dear Valued User,</span>  
        <br><br>
        Thank you for reaching out to us during this critical time. We understand how stressful such situations can be, but please rest assured that  
        <span style="color: #1d3557; font-weight: bold;">help is already on the way.</span>  
        <br><br>
        The <span style="color: #457b9d; font-weight: bold;">National Disaster Response Force (NDRF)</span> team has been notified of your location and will promptly assist with evacuation and safety measures.  
        <br><br>
        <span style="color: #2a9d8f; font-weight: bold;">Your well-being is our top priority,</span> and our coordinated response team is working tirelessly to ensure you are safe and secure.  
        <br><br>
        <span style="color: #e76f51; font-size: 20px; font-weight: bold;">What to Do Now:</span>  
        <ul style="color: #333;">
            <li style="margin-bottom: 8px;">Stay calm and follow any <span style="color: #f4a261;">local safety guidelines.</span></li>
            <li style="margin-bottom: 8px;">Keep essential items like <span style="color: #f4a261;">identification, water,</span> and <span style="color: #f4a261;">first-aid kits</span> close by.</li>
            <li>Trust the <span style="color: #457b9d;">NDRF personnel</span> when they arrive—they are fully equipped to handle such emergencies.</li>
        </ul>  
        <br>
        <span style="color: #2a9d8f; font-weight: bold;">Remember, you are not alone.</span> Together, we will get through this.  
        <br><br>
        <span style="color: #e63946; font-weight: bold;">Stay safe and stay strong,</span>  
        <br>
        <span style="color: #1d3557; font-size: 20px; font-weight: bold;">The Flood Rescue Team</span>  
    </p>
                <p>Here are the details you provided:</p>
                <p>Name: ${firstname} ${lastname}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phoneNo}</p>
                <p>Message: ${message}</p>
                <p>We appreciate your interest and will get back to you shortly. </p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:info@matsyaportal.com">info@Matsyaportal.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`
  }