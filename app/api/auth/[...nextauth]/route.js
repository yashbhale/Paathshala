import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
// import { connectToDB } from '@/app/backend/server';
// import { User } from '@/models/user';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
//   callbacks: {
//     async signIn({ user, account, profile, email }) {
//       await connectToDB();

//       const finduser = await User.findOne({ email: user.email });

//       console.log(user.name,"mmmmmmmmmmmmmmmmmmmkjdnjd,,mmmmmmmmmmmmmmmmm")
//       if (!finduser) {
//         const newUser = new User({
//           name: user.name,
//           email: user.email
//         });

//         await newUser.save();
//       }
      
//       return true;
//     }
//   }
});

export { handler as GET, handler as POST }