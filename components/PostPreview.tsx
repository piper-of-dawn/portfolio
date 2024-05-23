import { PostMetaData } from "./postMetaData";
import Link from "next/link";
import Image from 'next/image'

const PostPreview = (props: PostMetaData) => {
  return (




    <div className="min-w-60 p-4 relative group ml-auto mr-auto">


      <Link className="md:mx-auto w-auto md: rounded-lg max-w-full border relative block overflow-hidden shadow-md border-gray-100 p-4" href={`/posts/${props.slug}`}>


        <div className="sm:flex sm:justify-between sm:gap-2">
          <div>
            <p className="bg-frost-aqua text-12px p-2 rounded-md bg-opacity-30  w-fit mb-4 font-mono uppercase">{props.label}</p>
            <h3 className="text-large font-bold text-gray-900 sm:text-large border-l-2 border-l-slate-800 pl-2">
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

        <p className="hidden group-hover:flex flex-row text-normal font-bold m-2 ease-in duration-1000">Read <Image className="m-1" src="\images\arrow-right-solid.svg" alt="Logo" width={10} height={10} /></p>


      </Link>


    </div>


  );
};

export default PostPreview;