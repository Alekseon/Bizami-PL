import { createClient } from "smtpexpress"
import { useState } from "react";
export default function useDemoInfo({ values }) {

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

        const rec = await fetch("/api/recaptcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });
            
            if (!rec.ok) {
                setMessage('Błąd autoryzacji recaptcha. Prosimy o kontakt poprzez email: kontakt@bizami.pl.');
                setError(true);
            }
            if(rec.ok) {

                const emailSend = await fetch("/api/email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                });

                if (emailSend.ok) {
                    setMessage('Dziękujemy za przesłanie zapytania. Skontaktujemy się w ciągu 48 godzin.');
                } else {
                    setError(true);
                    setMessage('Prosimy o kontakt poprzez email: kontakt@bizami.pl.');
                }






                const smtpexpressClient = createClient({
                    projectId: `${process.env.GATSBY_SMTPXP_PROJECT_ID}`,
                    projectSecret: `${process.env.GATSBY_SMTPXP_PROJECT_SECRET}`
                });

                try {
                    smtpexpressClient.sendApi.sendMail({
                        subject: "Kontakt Bizami",
                        message: "<h1>Kontakt Bizami</h1>",
                        sender: {
                            name: "AB Digital Enterprises",
                            email: `${process.env.GATSBY_SMTPXP_SENDER}`
                        },
                        recipients: {
                            name: "My recipient's name",
                            email: `${process.env.GATSBY_SMTPXP_RECIPIENTS}`
                        },
                        template: {
                            id: `${process.env.GATSBY_SMTPEXPRESS_TEMPLATE_ID}`,
                            variables: {
                                name: body.username,
                                email: body.email,
                                phone: body.phone,
                                company: body.company,
                                magSize: body.itemCount,
                                erp: body.erp,
                                quantity: body.magCount,
                            }
                        }
                    });

                } catch {

                }

                window.dataLayer?.push({
                    event: 'inquiry-sent'
                });
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