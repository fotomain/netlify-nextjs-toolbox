
import {db} from "firebase-config";

import {doc, setDoc} from "firebase/firestore";


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
