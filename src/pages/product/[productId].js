import React from 'react';
import Layout from '../../components/Layout';

const ProductDetails = () => {
    return (
        <div>
            this is details page
        </div>
    );
};

export default ProductDetails;



ProductDetails.getLayout = function getLayout(page){
    return (
      <Layout>
        {page}
      </Layout>
    )
  }