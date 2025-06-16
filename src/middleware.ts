import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_ROUTES = ['/signin', '/signup']

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get('token')?.value
  const isLoggedIn = !!userCookie

  const pathname = request.nextUrl.pathname

  // Se não logado e tentando acessar privada
  if (!isLoggedIn && !PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // Se logado e tentando acessar pública
  if (isLoggedIn && PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Define onde o middleware atua:
export const config = {
  matcher: ['/', '/signin', '/signup'],
}
