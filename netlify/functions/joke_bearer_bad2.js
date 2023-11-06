
// !!!!!!!!!!! FETCH TEST ONLY

// import NextCors from 'nextjs-cors';
const cors = require('cors');

const corsOptions = {
    origin: 'https://example.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
};


export default async (req, ctx) => {



    if (req.method === "POST")
    {

        const req_data = await req.json();
        const res = ctx.json({
            statusCode: 200,
            message: '!!!!!!!!!!!!!!! you posted!',
            req_data: req_data,
    });
        // res.headers.set("Access-Control-Allow-Origin", "*");
        // res.headers.append("Access-Control-Allow-Headers", "*");
        // res.headers.append("Access-Control-Allow-Methods", "*");


        //ccccccccccccccc
        const allowedOrigins = ['http://localhost:3000','http://localhost:3001','https://port555.netlify.app'];
        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        // res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");

        res.headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.headers.append("Access-Control-Allow-Methods", "*");
        res.headers.append("Access-Control-Allow-Credentials", "true");

        return res;
    } else if (req.method === "OPTIONS")
    {
        const res = new Response();
        // res.headers.set("Access-Control-Allow-Origin", "*");
        // res.headers.append("Access-Control-Allow-Headers", "*");
        // res.headers.append("Access-Control-Allow-Methods", "*");

        //ccccccccccccc
        const allowedOrigins = ['http://localhost:3000','http://localhost:3001','https://port555.netlify.app'];
        if (allowedOrigins.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        // res.headers.set("Access-Control-Allow-Origin", "");
        res.headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.headers.append("Access-Control-Allow-Methods", "*");
        res.headers.append("Access-Control-Allow-Credentials", true);

        return res;

    }


};





export default function handler(req, res) {
    cors(corsOptions)(req, res, () => {
        // Your API code here
        res.status(200).json({ message: 'Hello, World!' });
    });
}
