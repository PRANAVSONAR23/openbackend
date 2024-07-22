import { NextResponse } from 'next/server';

let notifications = [];

export async function POST(request) {
  const data = await request.json();
  notifications.push(data);
  const response = NextResponse.json({ message: 'Notification received' }, { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export async function GET() {
  const response = NextResponse.json(notifications, { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}