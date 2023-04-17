import { PostMetaData } from "./postMetaData";
import Link from "next/link";
import Image from 'next/image'

const PostPreview = (props: PostMetaData ) => {
  return (

    


      <div className="relative group ml-auto mr-auto">


 <Link className="rounded-lg w-80 border relative block overflow-hidden shadow-md border-gray-100 p-2 sm:p-3 lg:p-4" href={`/posts/${props.slug}`}>


  <span
    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-600 via-cyan-800 to-sky-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-2">
    <div>
      <h3 className="text-large font-bold text-gray-900 sm:text-large">
      {props.title}
      </h3>

      <p className="mt-1 text-normal font-medium text-slate-900">By Kumar Shantanu</p>
    </div>

  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-normal text-slate-800">
    {props.subtitle}
    </p>
  </div>

  {/* <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-normal font-bold text-slate-800">Published</dt>
      <dd className="text-normal text-gray-500">{props.date}</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-normal font-bold text-slate-800">Reading time</dt>
      <dd className="text-normal text-slate-800">3 minute</dd>
    </div>
  </dl> */}
  <p className="hidden group-hover:flex flex-row text-normal font-bold m-2 ease-in-out duration-200">Read <Image className="m-1" src="\images\arrow-right-solid.svg" alt= "Logo" width={10} height={10} /></p>


</Link>




          {/* <div className="relative flex flex-col align-middle p-4 rounded-md bg-white mb-4 h-fit shadow-md">

              <div className="group-hover:-translate-y-3 ease-out duration-100">
              <Link href={`/posts/${props.slug}`}>
                <h1 className="font-bold text-large overflow-hidden whitespace-nowrap group-hover:overflow-visible">{props.title}</h1>
               
                <h4 className="text-normal text-slate-600">{props.subtitle}</h4>
                <h6 className="font-mono text-subtitle">{props.date}</h6> 
           
              
                 </Link>    </div>

          </div> */}
      </div>
  
 
  );
};

export default PostPreview;