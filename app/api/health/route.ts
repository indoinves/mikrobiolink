export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'mikrobiolink-api',
    message: 'Health check successful.'
  });
}
