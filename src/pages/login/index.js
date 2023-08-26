import React from 'react';
import Layout from '../../components/Layout';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    console.log("router from login: ", router);
    return (
        <div className='mt-5 bg-gray-800 max-w-[500px] p-5 mx-auto rounded-lg min-h-[300px]'>
            <button onClick={()=> signIn("github", {callbackUrl: router.query.callbackUrl || "http://localhost:3000"})} className='bg-white px-4 py-2 font-bold rounded-lg block mx-auto min-w-[200px] mt-5'>
                Login With Github
            </button>
            <button className='bg-white px-4 py-2 font-bold rounded-lg block mx-auto min-w-[200px] mt-5'>
                Login With Gmail
            </button>
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page){
    return (
      <Layout>
        {page}
      </Layout>
    )
  }