'use client'
import { SessionProvider } from 'next-auth/react'
/**
 * 
 * @param {children,session}
 * children: children of the component
 * session: session object (from next-auth) (holds user data) 
 * @returns 
 */
const Provider = ({children,session}) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider