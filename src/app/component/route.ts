import { json } from "stream/consumers";
import localData from "./data";

export async function GET() {
  return Response.json(localData);
}

// export async function POST(request: Request) {
//     try {
//       const comment = await request.json();
//       if (!comment.text) {
//         return new Response(JSON.stringify({ error: 'Comment text is required' }), {
//           headers: { 'Content-Type': 'application/json' },
//           status: 400
//         });
//       }
//       const comments = [];
//       const newComment = {
//         id: comments.length + 1,
//         text: comment.text,
//       };
//       comments.push(newComment);
//       return new Response(JSON.stringify(newComment), {
//         headers: { 'Content-Type': 'application/json' },
//         status: 201
//       });
//     } catch (error) {
//       return new Response(JSON.stringify({ error: 'Invalid request' }), {
//         headers: { 'Content-Type': 'application/json' },
//         status: 400
//       });
//     }
//   }

export async function POST(request: Request) {
  const comment = await request.json();
  const comments = [];
  const newComment = {
    id: comments?.length + 1,
    text: comment?.text,
  };
  comments.push(newComment);
  return new Response(JSON?.stringify(newComment), {
    headers: { "Content-type": "application/json" },
    status: 201,
  });
}
