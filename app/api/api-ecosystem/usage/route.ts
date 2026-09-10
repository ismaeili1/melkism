import { getUsageSummary, listUsage } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    summary: getUsageSummary(),
    items: listUsage(),
    count: listUsage().length,
  });
}