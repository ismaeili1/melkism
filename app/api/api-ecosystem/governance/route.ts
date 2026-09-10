import { listGovernancePolicies } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listGovernancePolicies(),
    count: listGovernancePolicies().length,
  });
}