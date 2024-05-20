import Image from 'next/image'

function Avatar() {
  return <div className='h-44 w-44 mt-8 mx-auto md:mt-14'>
    <Image src="/images/portrait_new.png" alt="me" className='shadow-xl rounded-full' height="720" width="720" />
    {/* <SocialLinks/> */} </div> //TODO:        social links
}

export default Avatar