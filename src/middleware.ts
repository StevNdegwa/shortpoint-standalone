import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/sites(.*)',
  '/api(.*)',
]);

export default clerkMiddleware((auth, req) => {
  console.log('Middleware executing for:', req.url);
  
  if (isProtectedRoute(req)) {
    console.log('Protecting route:', req.url);
    auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};