import fs from "fs";
import Image from 'next/image'

import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetaData";
import '../../../styles/blogPost.css';
import ReactMarkdown from 'react-markdown'
import { Tinos }  from 'next/font/google'

const serif = Tinos({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})




const getPostContent = (slug: string) => {
  const folder = "posts/"; //This is the folder where your posts are stored
  const file = folder + slug + ".md"; // This is the file name
  const content = fs.readFileSync(file, "utf-8"); // Function readFileSync() reads the contents of the file synchronously
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  

  return (

    <>

      <div className="bg-gray-50">
  

        <div className="absolute bg-gray-50 inset-0 bg-[url(/images/grid.svg)] bg-top"></div>
        <div className="relative card bg-orange-50 py-8 shadow-lg md:mx-auto md:max-w-3xl lg:max-w-5xl lg:pb-28 lg:p-2 lg:pt-16 mt-0 md:mt-16">
          <div className={`${serif.variable} font-serif font-normal leading-6 text-slate-950 prose prose-slate mx-auto lg:prose-xl`}>
     
            <div className="font-black text-verybig text-slate-950 leading-tight">{post.data.title}</div>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

        </div>
      </div>
    </>

  );
};
export default BlogPage;