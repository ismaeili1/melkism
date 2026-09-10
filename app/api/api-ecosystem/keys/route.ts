import { listApiKeyMetadata } from '@/lib/api-ecosystem';

export async function GET(): Promise<Response> {
  return Response.json({
    items: listApiKeyMetadata(),
    count: listApiKeyMetadata().length,
    secretValuesIncluded: false,
  });
}