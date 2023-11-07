

var admin = require("firebase-admin");
var serviceAccount = require("./admin_key.json");

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default async (req, ctx) => {
    if (req.method === "POST")
    {

        const req_data = await req.json();
        var res = ctx.json({
            req_data: req_data,
        });
        res.headers.set("Access-Control-Allow-Origin", "*");
        res.headers.append("Access-Control-Allow-Headers", "*");
        res.headers.append("Access-Control-Allow-Methods", "*");

        const params = {email:'aa@wwwwwwwww.com'}

        const collection_emails_sended = app.firestore().collection('collection_emails_sended')

        const docID='email_guid'+Date.now().toString()
        const port_emails_sended_model = {
            id: docID,
            email: params.email,
            otp_code:(Math.floor(Math.random()*10000))
        };
        res.port_emails_sended_model = port_emails_sended_model;

        try {

            // https://github.com/kekule15/node-js-firebase-cloud-functions--upload-files/blob/master/functions/index.js
            await collection_emails_sended
                .doc(docID)
                .set(port_emails_sended_model,{ merge: true })
                .then((value) => {
                    //no actions on netlify
                });

            res = {...res,...{
                staus: 200,
                staus_message: '!!!!!!!!!!!!!!! email sended successfully',
            }};
            return res;

        }catch (e) {
            res.error = e.toString()
            return res;
        }


    } else if (req.method === "OPTIONS")
    {
        const res = new Response();

        res.headers.set("Access-Control-Allow-Origin", "*");
        res.headers.append("Access-Control-Allow-Headers", "*");
        res.headers.append("Access-Control-Allow-Methods", "*");
        return res;
    }


};
