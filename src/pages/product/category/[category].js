import React from 'react';
import Layout from '../../../components/Layout';

const ProductByCategory = () => {
    return (
        <div>
            this is category page
        </div>
    );
};

export default ProductByCategory;


ProductByCategory.getLayout = function getLayout(page){
    return (
      <Layout>
        {page}
      </Layout>
    )
  }