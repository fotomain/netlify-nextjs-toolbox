

export default async (req, ctx) => {
    if (req.method === "POST")
    {

        const req_data = await req.json();
        const res = ctx.json({
            statusCode: 200,
            message: '!!!!!!!!!!!!!!! you posted!'
            req_data: req_data,
        });

        // var oo_='---'
        // const allowedOrigins = ['http://localhost:3000','http://localhost:3001','https://port555.netlify.app'];
        // if (allowedOrigins.includes(origin)) {
        //     // res.setHeader('Access-Control-Allow-Origin', origin);
        //     oo_=origin
        // }
        //
        // const req_data = await req.json();
        // const res = ctx.json({
        //     statusCode: 200,
        //     origin: oo_,
        //     message: '!!!!!!!!!!!!!!! you posted!',
        //     req_data: req_data,
        // });



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
