import { listEndpoints } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listEndpoints(),
    count: listEndpoints().length,
  });
}