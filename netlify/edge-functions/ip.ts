import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const ip = context.ip;

  return new Response(JSON.stringify(ip), { status: 200 });
};
