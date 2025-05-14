import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';



// we need to protect the private pages

 const isPrivateRoute= createRouteMatcher([
    "/admin(.*)",
    "/saved-cars(.*)",
    "/reservation(.*)",

 ])


export default clerkMiddleware( async (auth,req)=>{

    const {userId}=await auth();

    //not signedIn and req path is amoung the private route
    
    if( !userId && isPrivateRoute(req)){
        const {redirectToSignIn}=await auth();
        return redirectToSignIn();
    }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
