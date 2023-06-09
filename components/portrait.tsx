import Image from 'next/image'

function Avatar() {
  return <div className='h-40 w-40 mt-8 mx-auto md:mt-14'>
    <Image src="/images/photo.png" alt="me" className='shadow-xl rounded-full' height="512" width="512"/>
    {/* <SocialLinks/> */} </div> //TODO: Add social links
}

export default Avatar