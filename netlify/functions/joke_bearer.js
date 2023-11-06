
// Jokes provided from the lovely folks at https://icanhazdadjoke.com
import jokes from './jokes.json';

export default async (req, ctx) => {
    if (req.method === "POST")
    {
        const res = ctx.json({
            message: '!!!!!!!!!!!!!!! 222 you posted!',
            request_raw: req.toString(),
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
        res.headers.append("Access-Control-Allow-Credentials", "true");
        return res;
    }


};



//
// // Jokes provided from the lovely folks at https://icanhazdadjoke.com
// import jokes from './jokes.json';
//
// import {NextResponse} from 'next/server'
//
// export default async (req, ctx) => {
//     if (req.method === "POST")
//     {
//         const res = ctx.json({ message: '!!!!!!!!!!!!!!! you posted!' });
//         res.headers.set("Access-Control-Allow-Origin", "*");
//         res.headers.append("Access-Control-Allow-Headers", "*");
//         res.headers.append("Access-Control-Allow-Methods", "*");
//         return res;
//
//     } else if (req.method === "OPTIONS")
//         // https://community.auth0.com/t/how-to-validate-a-token-on-next-js-backend-from-a-separate-frontend/103328/2
//
//     {
//         // const token = req.headers.get("Authorization");
//         const res = new Response();
//         res.headers.set("Access-Control-Allow-Origin", "*");
//         //222
//         // res.headers.append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept");
//         res.headers.append("Access-Control-Allow-Headers", "*");
//         res.headers.append("Access-Control-Allow-Methods", "*");
//
//         // if(token==="!!!!!!!bearercode777999!!!!!!")
//         //     return res;
//         // else{
//         //     return new NextResponse(
//         //         JSON.stringify({success: false, message: '!!!!! No bearer Authentication failed: No token given'}),
//         //         {status: 401, headers: {'content-type': 'application/json'}}
//         //     );
//         // }
//     }
//
//
// };
// //
// // export const handler = async (event) => {
// //     // Generates a random index based on the length of the jokes array
// //     const randomIndex = Math.floor(Math.random() * jokes.length)
// //     const randomJoke = jokes[randomIndex]
// //
// //     // Netlify Functions need to return an object with a statusCode
// //     // Other properties such as headers or body can also be included.
// //     return {
// //         statusCode: 200,
// //         body: JSON.stringify(randomJoke),
// //         headers:{
// //             "Access-Control-Allow-Headers": "*",
// //             // "Access-Control-Allow-Methods": "*",
// //             // "Content-Type": "application/json"
// //         }
// //     }
// // }
//
