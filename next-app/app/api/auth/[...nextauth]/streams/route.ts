import { NextRequest } from "next/server";
import { z } from "zod";

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export function POST(req: NextRequest) {
    const data = await req.json();
}