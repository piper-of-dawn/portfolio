import getPostMetaDatas from "./getPostMetaData";
import PostPreview from "./PostPreview";


const BlogPosts = () => {
  const postMetadata = getPostMetaDatas();
  const postBuckets: { [key: string]: any } = {

  }
  postMetadata.map((post) => {
    if (post.label in postBuckets) {
      postBuckets[post.label].push(post);
    } else {
      postBuckets[post.label] = [post];
    }
  });

  // const getPostPreviews = (key: string) => {
  //   return postBuckets[key].map((post: any) => (
  //     <PostPreview key={post.slug} {...post} />
  //   ));
  // }

  let postPreviews = postMetadata.filter((post) => post.classification != 'Notes').map((post) => {
    // let postPreviewsLocal = getPostPreviews(post.label);
    return (
      <div key={post.label} className="min-w-full pt-8">
        {/* <h1 className="text-read font-mono text-polar-night  font-semibold uppercase pb-4">{key}</h1> */}
        {/* <hr></hr> */}

        <PostPreview key={post.slug} {...post} />

      </div>
    )
  }
  );
  return (
    <div id="posts" className="flex">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {postPreviews}
      </div>
    </div>
  );
};




const NotesPosts = () => {
  const postMetadata = getPostMetaDatas();
  const postBuckets: { [key: string]: any } = {

  }
  postMetadata.map((post) => {
    if (post.label in postBuckets) {
      postBuckets[post.label].push(post);
    } else {
      postBuckets[post.label] = [post];
    }
  });

  // const getPostPreviews = (key: string) => {
  //   return postBuckets[key].map((post: any) => (
  //     <PostPreview key={post.slug} {...post} />
  //   ));
  // }

  let postPreviews = postMetadata.filter((post) => post.classification == 'Notes').map((post) => {
    // let postPreviewsLocal = getPostPreviews(post.label);
    return (
      <div key={post.label} className="min-w-full pt-8">
        {/* <h1 className="text-read font-mono text-polar-night  font-semibold uppercase pb-4">{key}</h1> */}
        {/* <hr></hr> */}

        <PostPreview key={post.slug} {...post} />

      </div>
    )
  }
  );
  return (
    <div id="posts" className="flex">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {postPreviews}
      </div>
    </div>
  );
};
export default BlogPosts;
export { BlogPosts, NotesPosts };
