import NextAuth             from 'next-auth'
import CredentialsProvider  from 'next-auth/providers/credentials'

export const authOptions = {
    providers: [
        CredentialsProvider({
            page: {
                signIn: '/login',
            },
            name: 'Credentials',
            // credentials: {
            //     email: { label: 'Email', type: 'email', placeholder: 'Email'},
            //     password: { label: 'Password', type: 'password'},
            // },
            async authorize(credentials, req) {
                // const user = {email: 'admin@karumawida.cl', password: 'admin123'}

                // if (email !== 'admin@karumawida.cl' && password !== 'admin123') {
                //     return null
                // } 
                // return {id: '1234', name: 'admin', email: 'admin@karumawida.cl'}
                try {
                    if(credentials.email === process.env.NEXTAUTH_EMAIL && credentials.password === process.env.NEXTAUTH_PASSWORD) {
                        return {
                            user: {
                                name: 'admin'
                            }
                        }
                    } 
                } catch (error) {
                    return null
                }
            },
        }),
    ]
}
export default NextAuth(authOptions)