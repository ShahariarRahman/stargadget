export { default } from "next-auth/middleware";

// export const config = { matcher: ["/tool/(.*)"] };
export const config = { matcher: ["/tool", "/tool/:path*"] };
