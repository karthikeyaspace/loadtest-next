import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function simulateApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'success', message: 'Simulated API response' });
    }, 600);
  });
}

export async function middleware(request: NextRequest) {
  console.log('Middleware - Path:', request.nextUrl.pathname);

  if (request.nextUrl.pathname !== '/') {
    await simulateApiCall();
    console.log("Delaying response by 600ms");
  }

  const headers = new Headers(request.headers);
  headers.set('X-Middleware-Perf-Test', 'true');

  const response = NextResponse.next({ headers });
  response.headers.set('X-Middleware-Overengineered', 'true');
  response.headers.set('X-Perf-Test-Complete', 'true');

  return response;
}

export const config = {
  matcher: ['/', '/shad', '/data', '/heavy'],
};