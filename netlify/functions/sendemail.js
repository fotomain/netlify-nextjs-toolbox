
import {db} from "firebase-config";

import {doc, setDoc} from "firebase/firestore";

export default async (req, ctx) => {
    if (req.method === "POST")
    {

        const req_data = await req.json();
        const res = ctx.json({
            statusCode: 200,
            message: '================ SENDEMAIL',
            req_data: req_data,
        });

        res.headers.set("Access-Control-Allow-Origin", "*");
        res.headers.append("Access-Control-Allow-Headers", "*");
        res.headers.append("Access-Control-Allow-Methods", "*");

        await setDoc(
            doc(db,'port_emails_sended', Date.now().toString() )
            ,{
                email_guid:'email_guid'+Date.now().toString(),
            }
        ).then((res)=>{
            console.log("=== set_send_email create new user")
        })

            return res;
    } else if (req.method === "OPTIONS")
    {
        const res = new Response();
        res.headers.set("Access-Control-Allow-Origin", "*");
        res.headers.append("Access-Control-Allow-Headers", "*");
        res.headers.append("Access-Control-Allow-Methods", "*");

        return res;
    }


};
