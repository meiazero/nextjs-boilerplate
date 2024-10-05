/**
 * An array of public route paths that do not require authentication.
 *
 * These routes are accessible to all users, including those who are not logged in.
 *
 * @constant
 * @type {Array<string>}
 */
export const publicRoutes: Array<string> = ["/", "/api/auth"];

/**
 * An array of authentication-related routes.
 *
 * This array contains the paths for the sign-in and error pages.
 *
 * @constant {Array<string>} authRoutes - The list of authentication routes.
 */

export const authRoutes: Array<string> = ["/sign-in", "/error"];

/**
 * The prefix for authentication-related API routes.
 *
 * @constant {string} apiAuthPrefix - The base path for all authentication endpoints.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default page to which users are redirected.
 *
 * @constant {string} DEFAULT_REDIRECT_PAGE
 * @default "/"
 */
export const DEFAULT_REDIRECT_PAGE: string = "/";
