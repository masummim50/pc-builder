import React from 'react';
import Layout from '../../components/Layout';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import {AiFillGithub,AiFillGooglePlusCircle} from "react-icons/ai"

const Login = () => {
    const router = useRouter();
    return (
        <div className='mt-5 bg-gray-800 max-w-[500px] p-5 mx-auto rounded-lg min-h-[300px]'>
            <button onClick={()=> signIn("github", {callbackUrl: router.query.callbackUrl || "https://pc-builder-hazel.vercel.app"})} className='text-center bg-white px-4 py-2 font-bold rounded-lg block mx-auto min-w-[200px] mt-5 hover:shadow-md hover:shadow-white'>
                <AiFillGithub className='text-center mx-auto text-[28px]'/>
                Login With Github
            </button>
            <button disabled className='bg-white px-4 py-2 font-bold rounded-lg block mx-auto min-w-[200px] mt-5 disabled:bg-gray-700'>
                
            <AiFillGooglePlusCircle className='text-center mx-auto text-[28px]'/>
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