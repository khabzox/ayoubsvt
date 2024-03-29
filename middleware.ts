import { authMiddleware } from "@clerk/nextjs";
// export { default } from "next-auth/middleware";
// export const config = { matcher: ["/extra", "/dashboard"] }
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ['/', '/About-Us', '/Contact-Us', '/Privacy-Policy', '/Term-of-Condition', '/Disclaimer', '/blog/', '/blog/posts']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};