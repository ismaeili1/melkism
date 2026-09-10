import { listRateLimitPolicies } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listRateLimitPolicies(),
    count: listRateLimitPolicies().length,
  });
}