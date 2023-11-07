

var admin = require("firebase-admin");
var serviceAccount = require("./admin_key.json");

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default async (req, ctx) => {
    if (req.method === "POST")
    {

        const params = {email:'aa@wwwwwwwww.com'}

        const port_emails_sended = app.firestore().collection('port_emails_sended')

        const docID='email_guid'+Date.now().toString()
        const port_emails_sended_model = {
            id: docID,
            email: params.email,
        };

        await port_emails_sended.doc(docID).set(port_emails_sended_model,{ merge: true })
            .then((value) => {
                // return response to users
                res.status(200).send({
                    message: "user created successfully",
                    data: port_emails_sended_model,
                    error: {},
                })
            });

        const req_data = await req.json();
        const res = ctx.json({
            statusCode: 200,
            message: '!!!!!!!!!!!!!!! ddddddddddddd',
            req_data: req_data,
            // reqorigin: oo_,
        });

        // await setDoc(
        //     doc(db,'port_emails_sended', Date.now().toString() )
        //     ,{
        //         email_guid:'email_guid'+Date.now().toString(),
        //     }
        // ).then((res)=>{
        //     console.log("=== set_send_email create new user")
        // })

        res.headers.set("Access-Control-Allow-Origin", "*");

        res.headers.append("Access-Control-Allow-Headers", "*");
        res.headers.append("Access-Control-Allow-Methods", "*");
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
