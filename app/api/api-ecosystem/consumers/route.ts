import { listConsumers } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listConsumers(),
    count: listConsumers().length,
  });
}