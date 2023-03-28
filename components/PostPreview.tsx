import { PostMetaData } from "./postMetaData";
import Link from "next/link";
import Image from 'next/image'

const PostPreview = (props: PostMetaData ) => {
  return (

      <div className="relative group">



          <div className="relative flex flex-col align-middle p-4 rounded-md bg-white mb-4 h-fit shadow-md">

              <div className="group-hover:-translate-y-3 ease-out duration-100">
              <Link href={`/posts/${props.slug}`}>
                <h1 className="font-bold text-large overflow-hidden whitespace-nowrap group-hover:overflow-visible">{props.title}</h1>
               
                <h4 className="text-normal text-slate-600">{props.subtitle}</h4>
                <h6 className="font-mono text-subtitle">{props.date}</h6> 
           
               <p className="hidden group-hover:flex flex-row text-normal font-bold m-2 ease-in-out duration-200">Read <Image className="m-1" src="\images\arrow-right-solid.svg" alt= "Logo" width={10} height={10} /></p>
              
                 </Link>    </div>

          </div>
      </div>
  
 
  );
};

export default PostPreview;