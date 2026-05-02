import { NextResponse } from 'next/server'
import { auth } from './src/lib/auth'
import { headers } from 'next/headers'

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
}

export const config = {
  matcher: ['/profile', '/all-animals/:id'],
}
