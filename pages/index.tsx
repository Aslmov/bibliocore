import type { NextPage } from 'next'
import Head from 'next/head'
import {Categories, PostWidget, PostCard, Header} from "./components";


const posts = [
    {title : "react", excerpt: 'dsdl'},
    {title : "react", excerpt: 'dsdl'}
]
const Home: NextPage = () => {


    return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>CodeHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
            {posts.map((post)=>   <PostCard key={post.title}/>)}
        </div>

        <div className="lg:col-span-4 col-span-1">
            <div className="lg: sticky relative top-8">
                <PostWidget></PostWidget>
                <Categories></Categories>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Home
