import localData from "@/app/component/data";
import { NextRequest } from "next/server";

// export async function GET(
//   _request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const comment = localData?.find(
//     (comment) => comment.id === parseInt(params.id)
//   );
//   return Response.json(comment);
// }


// export async function PATCH(
//     request:Request,
//     {params}: {params:{id:string}}
// ) {
//     const body = await request.json()
//     const {name}= body;
//     const index = localData.findIndex(
//         (comment)=> comment.id === parseInt(params?.id)
//     );
//     localData[index].name= name;
    
//     return Response.json(localData[index])
// }


// export async function DELETE(
//     request: Request,
//     {params}:{params :{id:string}}
// ) {
//     const index = localData.findIndex(
//         (comment)=>comment.id === parseInt(params?.id)
//     )
//     localData.splice(index)

//     return Response.json(localData)
// }


// for qurey parameters for search

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get("query");

    // Filter localData based on the query
    const filteredComments = query 
        ? localData.filter(comment => comment?.name?.includes(query)) 
        : localData;

    // Return the filtered comments as a JSON response
    return Response.json(filteredComments);
}
