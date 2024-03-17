import fs from "fs";
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetaData";
import '../../../styles/blogPost.css';
import ReactMarkdown from 'react-markdown'
import { DM_Mono }  from 'next/font/google'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'


const serif = DM_Mono({
  weight: ['400', '500'],
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



    <div className="bg-amber-50 p-10">
  
          <div className={`${serif.variable} pt-20 font-sans leading-6 prose text-neutral-950 mx-auto lg:prose-xl`}>     
            <div className="text-center font-sans text-stone-600 uppercase  text-subtitle font-bold leading-tight">{post.data.hierarchy}</div>
            <hr className="x-auto h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>            
            <div className="text-center font-sans font-bold text-stone-900 text-verylarge leading-tight">{post.data.title}</div>
            <hr className="h-px mx-auto my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
       
 <ReactMarkdown className="text-read text-stone-900 font-medium text-justify leading-relaxed"  remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}>{post.content}</ReactMarkdown> 
      
          </div>

</div>


  );
};
export default BlogPage;

