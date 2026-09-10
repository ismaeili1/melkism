import { listWebhooks } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listWebhooks(),
    count: listWebhooks().length,
  });
}