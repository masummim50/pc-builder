import React from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import ProductsCardContainer from '../../../components/ProductsCardContainer';

const ProductByCategory = ({ products }) => {
    const router = useRouter();
    const category = router.query.category;
    return (
        <>
        <ProductsCardContainer headline={category.toUpperCase()} products={products} />
        </>
    );
};
export default ProductByCategory;



export const getStaticPaths = async () => {
    const paths = [{
        params: { category: "motherboard" },
        params: { category: "cpu" },
        params: { category: "monitor" },
        params: { category: "ram" },
        params: { category: "storage" },
        params: { category: "psu" },
        params: { category: "other"}, 
    }]
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    // const res = await fetch(`http://localhost:3000/api/products/category/${category}`);
    const res = await fetch(`http://localhost:3000/api/products/category/${params.category}`);
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

