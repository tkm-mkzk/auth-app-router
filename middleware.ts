import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    // 認可に関する処理。ロールが `admin` ならOK
    authorized: ({ token }) => {
      return token?.role === 'admin'
    },
  },
  // リダイレクトページ
  pages: {
    signIn: '/login',
  },
})

export const config = {
  // ルートとregister・api・loginはリダイレクト対象から外す
  // matcher: ['/((?!register|api|ligin|).*)'],

  // register・api・loginはリダイレクト対象から外す
  matcher: ['/((?!register|api|login).*'],
}
