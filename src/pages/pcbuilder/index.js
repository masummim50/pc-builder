import React from 'react';
import Layout from '../../components/Layout';
import { useSession } from 'next-auth/react';

const PcBuilder = () => {
    const {data} = useSession();
    console.log("login data from pcbuilder: ", data)
    return (
        <div>
            this is pc builder page
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page){
    return (
        <Layout>
            {page}
        </Layout>
    )
}