import { listQuotaPolicies } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listQuotaPolicies(),
    count: listQuotaPolicies().length,
  });
}