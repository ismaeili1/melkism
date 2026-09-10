import { getUsageSummary, getApiHealth, listApis } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    phase: '2.93',
    version: 'v2.93.0',
    domain: 'api-ecosystem',
    registry: {
      count: listApis().length,
      apis: listApis(),
    },
    usage: getUsageSummary(),
    health: getApiHealth(),
    status: 'foundation-ready',
  });
}