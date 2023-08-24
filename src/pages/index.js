import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Head from 'next/head'
import Banner from '../components/Banner'
import FeaturedCategory from '../components/FeaturedCategory'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
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
        <div>{products.length}</div>
        <Banner/>
        <FeaturedCategory/>
        {
          products.map((product)=> (
            <div key={product._id}>
              {product.title}
            </div>
          ))
        }
      
      HOme
    </div>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
 
  return {
    props: {
      products:data.data
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