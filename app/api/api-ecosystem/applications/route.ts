export async function GET(): Promise<Response> {
  return Response.json({
    items: [
      {
        id: 'app-internal-core',
        consumerId: 'consumer-internal',
        name: 'MELKISM Internal Core',
        status: 'active',
        scopes: ['property.read', 'global.read'],
      },
    ],
    count: 1,
  });
}