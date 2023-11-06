// Jokes provided from the lovely folks at https://icanhazdadjoke.com
import jokes from './jokes.json';

export default async (req, ctx) => {
    if (req.method === "POST")
        { const res = ctx.json({ message: '!!!!!!!!!!!!!!! joke_bearer posted!' });
            res.headers.set("Access-Control-Allow-Origin", "*");
            res.headers.append("Access-Control-Allow-Headers", "Content-Type,Authorization");
            res.headers.append("Access-Control-Allow-Methods", "*");
            // Authorization
            // res.headers.append("Access-Control-Allow-Credentials", "true");
            return res;
        } else if (req.method === "OPTIONS")
        {
            const res = new Response();
            res.headers.set("Access-Control-Allow-Origin", "*");
            res.headers.append("Access-Control-Allow-Headers", "Content-Type");
            // res.headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
            // res.headers.append("Access-Control-Allow-Headers", {
            //     "Content-Type":"application/json",
            //     "Authorization": "!!!!!!!bearercode777999!!!!!!"
            // });
            res.headers.append("Access-Control-Allow-Methods", "*");
            // Authorization
            res.headers.append("Access-Control-Allow-Credentials", "true");
            return res;
        }


};
//
// export const handler = async (event) => {
//     // Generates a random index based on the length of the jokes array
//     const randomIndex = Math.floor(Math.random() * jokes.length)
//     const randomJoke = jokes[randomIndex]
//
//     // Netlify Functions need to return an object with a statusCode
//     // Other properties such as headers or body can also be included.
//     return {
//         statusCode: 200,
//         body: JSON.stringify(randomJoke),
//         headers:{
//             "Access-Control-Allow-Headers": "*",
//             // "Access-Control-Allow-Methods": "*",
//             // "Content-Type": "application/json"
//         }
//     }
// }

