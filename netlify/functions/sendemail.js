

var admin = require("firebase-admin");
var serviceAccount = require("./admin_key.json");

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default async (req, ctx) => {
    if (req.method === "POST")
    {

        const req_data = await req.json();
        const res = ctx.json({
            statusCode: 200,
            message: '!!!!!!!!!!!!!!! ddddddddddddd',
            req_data: req_data,
            // reqorigin: oo_,
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
        };
        res.port_emails_sended_model = port_emails_sended_model;

        try {

            await collection_emails_sended
                .doc(docID)
                .set(port_emails_sended_model,{ merge: true })
                .then((value) => {
                    // return response to users
                    // res.status(200).send({
                    //     message: "email sended created successfully",
                    //     data: port_emails_sended_model,
                    //     error: {},
                    // })
                    res.staus=200
                    res.staus_message="email sended created successfully"
                    // return res;
                });

        }catch (e) {
            res.error = e.toString()
        }

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
