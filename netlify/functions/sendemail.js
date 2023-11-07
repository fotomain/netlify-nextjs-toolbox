

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
        return res;
    } else if (req.method === "OPTIONS")
    {
        const res = new Response();
        res.headers.set("Access-Control-Allow-Origin", "*");
        return res;
    }


};
