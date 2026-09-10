import { listApis } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listApis(),
    count: listApis().length,
  });
}