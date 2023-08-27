import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Head from 'next/head'
import Banner from '../components/Banner'
import FeaturedCategory from '../components/FeaturedCategory'
import ProductsCardContainer from '../components/ProductsCardContainer'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products, randomProducts}) {
  const {data} = useSession();
  return (
    <div>
      <Head>
        <title>
          Pc Builder
        </title>
        <meta
          name="description"
          content="A website that helps you visualize and build your dream pc and experiment with different components"
          key="desc"
        />
      </Head>
        <Banner/>
        <ProductsCardContainer products={randomProducts} headline={"Featured products"}/>
        <FeaturedCategory/>
        
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://pc-builder-backend-4oyy.onrender.com/api/products");
  const data = await res.json();
  const randomres = await fetch("https://pc-builder-backend-4oyy.onrender.com/api/products/random");
  const random = await randomres.json();
 
  return {
    props: {
      products:data.data,
      randomProducts: random.data
    },
  }
}


Home.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}