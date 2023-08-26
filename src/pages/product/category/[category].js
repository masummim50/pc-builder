import React from 'react';
import Layout from '../../../components/Layout';
import ProductsCardContainer from '../../../components/ProductsCardContainer';

const ProductByCategory = ({products}) => {
    return (
        <>
        <ProductsCardContainer products={products} />
        </>
    );
};
export default ProductByCategory;



export const getStaticPaths = async () => {

    const paths = [
        {params: { category: "motherboard" }},
        {params: { category: "cpu" }},
        {params: { category: "monitor"} },
        {params: { category: "ram" }},
        {params: { category: "storage" }},
        {params: { category: "psu" }},
        {params: { category: "other"}}, 
    ]
    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://pc-builder-backend-4oyy.onrender.com/api/product/category/${params.category}`);
    const data = await res.json();
    return {
        props: {
            products: data.data,
        },
    }
}

ProductByCategory.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

