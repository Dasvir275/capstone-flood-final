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
                    src="https://drive.google.com/file/d/115ZKe0IKmHlmbDwIIEFvha41pjCrD2J3/view?usp=sharing" alt="MATSYA PORTAL"></a>
            <div class="message">Contact Form Confirmation</div>
            <div class="body">
                <p>Dear ${firstname} ${lastname},</p>
                <p>Dear Valued User,
Thank you for reaching out to us during this critical time. We understand how stressful such situations can be, but please rest assured that **help is already on the way.**  

The **National Disaster Response Force (NDRF)** team has been notified of your location and will promptly assist with evacuation and safety measures. 
Your well-being is our top priority, and our coordinated response team is working tirelessly to ensure you are safe and secure.  

**What to Do Now:**  
- Stay calm and follow any local safety guidelines.  
- Keep essential items like identification, water, and first-aid kits close by.  
- Trust the NDRF personnel when they arrive—they are fully equipped to handle such emergencies.  

Remember, you are not alone. Together, we will get through this.  

Stay safe and stay strong,  
**The Flood Rescue Team**  
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