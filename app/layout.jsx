import '@styles/globals.css'

import Nav from '@components/nav'
import Provider from '@components/provider'


export const metadata ={
    title: 'Promptopia',
    description: 'A place to find prompts for your next project',
}
/**
 * 
 * @param {children} param0 
 * @returns all the content of the page wrapped in the layout
 */
const  RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className="gradient"/>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout  