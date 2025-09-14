import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_URL_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_URL_PRIVATE_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!
});

export async function POST(req: NextRequest) {
  
    const formData = await req.formData();
    const file = formData.get('file') as File;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
 

    try {
        const uploadPdf = await imagekit.upload({
            file : buffer, //required
            fileName : Date.now().toString() + ".pdf",   //required
            isPublished : true
        });

        return NextResponse.json({url : uploadPdf.url} , {status : 200});

    } catch (error : any) {
        console.error(error);
        return NextResponse.json({error : "Error uploading file"} , {status : 500});
    }

}