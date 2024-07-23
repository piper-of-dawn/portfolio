import fs from "fs";
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetaData";
import '../../../styles/blogPost.css';
// import '../../../styles/katex.css';
import ReactMarkdown from 'react-markdown'
import { Old_Standard_TT } from 'next/font/google'
import remarkMath from 'remark-math'

import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

import 'katex/dist/katex.min.css'






const getPostContent = (slug: string) => {
  const folder = "posts/"; //This is the folder where your posts are stored
  const file = folder + encodeURIComponent(slug) + ".md";
  // const file = folder + slug + ".md"; // This is the file name
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



    <div className="p-10">

      <div className="pt-20 font-sans leading-6 prose text-polar-night mx-auto lg:prose-xl">
        <div className="text-center mx-auto p-2 font-mono border-y-2 border-gray-900 border-x-2 text-polar-night uppercase text-subtitle font-bold leading-tight lg:w-1/3 xl: w-1/2">{post.data.hierarchy}</div>
        <div className="text-center font-sans font-black text-polar-night uppercase text-big leading-tight pt-16 pb-5 md:text-huge">{post.data.title}</div>
        <div className="w-9 h-1 bg-frost-azure mb-2 mt-2 mx-auto"></div>


        <div className="font-sans font-bold text-center text-large text-polar-night">{post.data.subtitle}</div>
        <div className="font-mono pt-4 text-normal text-center mx-auto w-1/2">
          Kumar Shantanu | {post.data.date}
        </div>
        <ReactMarkdown className="text-read 
text-polar-night font-normal leading-relaxed pt-16" remarkPlugins={[remarkMath, remarkParse, remarkRehype]}
          rehypePlugins={[rehypeKatex, rehypeRaw, rehypeStringify]}>{post.content}</ReactMarkdown>

      </div>

    </div>


  );
};
export default BlogPage;

