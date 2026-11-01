export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    ok: true,
    event: body.event || 'page_view',
    receivedAt: new Date().toISOString(),
    message: 'Analytics event accepted.'
  });
}
