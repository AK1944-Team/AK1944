import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

type RevalidateBody = {
  tag?: string;
};

export const POST = async (request: Request) => {
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      { message: "REVALIDATE_SECRET is not configured." },
      { status: 500 },
    );
  }

  const receivedSecret = request.headers.get("x-revalidate-secret");

  if (receivedSecret !== expectedSecret) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  let body: RevalidateBody;

  try {
    body = (await request.json()) as RevalidateBody;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!body.tag) {
    return NextResponse.json({ message: "Missing tag." }, { status: 400 });
  }

  revalidateTag(body.tag);

  return NextResponse.json({ revalidated: true, tag: body.tag });
};
