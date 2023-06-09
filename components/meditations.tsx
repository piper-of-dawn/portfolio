import React from 'react'
import BlogPosts from './blogPosts'
function Meditations() {
  return (
    <div id="posts" className='mb-6 mt-14 md:col-span-2'>
        <div className="ml-auto mr-auto font-mono font-bold border-t border-b border-dotted text-normal text-center uppercase tracking-wide p-2 w-40 pt-3 mb-5">Meditations</div>
        <p className='text-normal w-80 text-slate-900 ml-auto mr-auto p-4 pb-8 text-justify'>Here, I share my meditations on the things that intrigue, amuse, or enlighten me. I usually write about computer programming, quantitative finance, some random life experiences or anythingthat captivates my curiosity. You can also find me on Medium and LinkedIn blogs.</p> 
        <BlogPosts/>
        </div>
  )
}

export default Meditations