
import { useState } from "react";

export default function useDemoInfo({ values}) {
    
   
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] =useState(false);
    

    async function submitDemoRequest(e, token) {

        e.persist();
        setLoading(true);
        setError(false);
        
        const body = {
            name: values.username,
            email: values.email,
            phone: values.phone,
            company: values.company,
            magSize: values.itemCount,
            erp: values.erp,
            quantity: values.magCount,
            token: token,
        };


        const res = await fetch('/api/email');
        const text = await res.text();
        console.log(text)


        const rec = await fetch("/api/recaptcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });

            console.log(rec)
            
            if (!rec.ok) {
                setMessage('Błąd autoryzacji recaptcha. Prosimy o kontakt poprzez email: kontakt@bizami.pl.');
                setError(true);
                
            }
        //
        //     const textc = await rec.text();
        //
        //     const datac = await JSON.parse(textc);
        //
        //
        //
        //
        //
        //
        // if(parseFloat(datac.data.score)>= 0.4 && parseFloat(datac.data.score)<= 1.0){   // akceptacja wyniku recaptchy
        //
        //     const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/sendDemoRequest`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(body),
        //     });
        //     //const text = await res.text();
        //     if(res.ok){
        //         setMessage('Dziękujemy za przesłanie zapytania. Skontaktujemy się w ciągu 48 godzin.');
        //
        //       window.dataLayer?.push({
        //         event: 'inquiry-sent'
        //       });
        //     }else{
        //         setError(true);
        //         setMessage('Prosimy o kontakt poprzez email: kontakt@bizami.pl.');
        //     }
        //     setLoading(false);
        // }
       
    }
        return {
            submitDemoRequest,
            loading,
            message,
            error,
        };
    
};