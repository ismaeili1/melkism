import { getApiHealth } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  const health = getApiHealth();

  return Response.json({
    items: health,
    count: health.length,
    healthy: health.filter((item) => item.status === 'healthy').length,
    degraded: health.filter((item) => item.status === 'degraded').length,
    unavailable: health.filter((item) => item.status === 'unavailable').length,
  });
}