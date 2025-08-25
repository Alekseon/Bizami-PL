const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    
    // Verify reCaptcha token
    const secretKey = `${process.env.SECRET_KEY}`; 
    
    
    const token = body.token;
    
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
   
      
      const responseData = await fetch(verifyUrl, { method: 'POST' });
      const data = await responseData.json(); 
      
      if(data.success){
        return{
            statusCode: 200,
            body: JSON.stringify({
            data: data
            })
        }
      }
      if (!data.success) {
        
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Błąd weryfikacji recaptcha' })
          
        };
      }
    } 
