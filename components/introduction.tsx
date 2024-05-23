import React from 'react'

function Introduction() {
  return (
    <div className="about leading-6 p-14 mt-8 md:pr-8 pt-6 pl-8">
      <div> <div className="font-sans font-light text-center text-verylarge text-slate-700 xl:text-left">Hi, I am </div><p className='font-normal text-verylarge text-center text-slate-700 xl:text-left mt-5 mb-5'>Kumar Shantanu</p></div>
      <p className='text-normal font-semibold text-slate-900 mb-auto mt-auto pb-4 text-justify'> I am a design-loving nerd, navigating the intersection of technology, mathematics and art, on this wild ride of figuring out ways to do something meaningful. Nowadays, I am deeply interested in the intersection of machine learning and computational finance.</p>
      <p className='text-normal text-justify text-slate-900 row-start-2'>Econometrics and Time-Series Analysis are my craft and thus I hunt patterns and weave stories with data for a living. I speak Hindi and English to humans, while Python and Javascript to computers. I also authored a Python library that facilitates comparison and testing of dataframes. I am currently learning deep learning, financial engineering and to speak Polish and Rust. In my free time, I work as a Market Risk Quant at Union Bank of Switzerland (UBS).</p>
    </div>
  )
}

export default Introduction