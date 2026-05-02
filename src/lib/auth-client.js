import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000",
    //  baseURL: "https://b13-a8-qurbani-hat.vercel.app"
}) 
export const {signUp, signIn, SignOut, useSession} = 
createAuthClient