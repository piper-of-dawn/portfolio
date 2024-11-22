import React from 'react'
import { BlogPosts, NotesPosts } from './blogPosts'
function Meditations() {
  return (
    <div id="posts" className='mb-6 mt-14 md:col-span-2'>
      <div className="ml-auto mr-auto font-mono font-bold border-t border-b border-dotted text-normal text-center uppercase tracking-wide p-2 w-40 pt-3 mb-5">Chasing Intuitions and Meaning</div>
      <p className='text-normal w-1/2 text-polar-night ml-auto italic mr-auto p-4 pb-8 text-justify'> Here, I share my meditations on the things that intrigue, amuse, or enlighten me. I usually write about computer programming, quantitative finance, some random life experiences or anything that captivates my curiosity. You can also find me on Medium and LinkedIn blogs.</p>
      <BlogPosts />
      <div className="ml-auto mr-auto font-mono font-bold border-t border-b border-dotted text-normal text-center uppercase tracking-wide p-2 w-40 pt-3 mb-5">Notes</div>
      <p className='text-normal w-1/2 text-polar-night italic ml-auto mr-auto p-4 pb-8 text-justify'>This is my own stuff. Here, you might find my notes usually on computational finance, mathematics, programming or anything in between. This aint organised!</p>
      <NotesPosts />
    </div>
  )
}

export default Meditations
