import Avatar from '../components/portrait'
import SkillStack from '../components/skillstack'
import BlogPosts from '../components/blogPosts'
import Problems from '../components/problems'
import {WorkTimeline,EducationTimeline} from '../components/workTimeline'
import Introduction from '../components/introduction'
import Meditations from '../components/meditations'


const about = () => {     
  return (
    
    <div className='flex-col lg:grid grid-cols-5 ml-auto mr-auto gap-9 pt-6 max-w-7xl'>

   
      <div id="LeftSide" className='relative xl:sticky pr-4 mx-auto'>
        <Avatar />
        <div className='pl-8 pr-8 pt-2 hidden lg:flex'><SkillStack /></div>
      </div>

      <div id="AboutSection" className='pl-8 pr-8 md:col-span-2 md:pl-4 md:pr-4'>

        <Introduction/>
     
      <div className='lg:pt-6 pl-8 pr-8'><Problems/></div>   
      
      </div>

      <div className='pl-8 pr-8 mb-6 md:hidden xl:sticky pt-6'><SkillStack/></div>  
 
      <Meditations/>
     
 <div className="timeline col-span-2 col-start-2 pl-8 pr-8">
 <div className="ml-auto mr-auto font-mono font-bold border-t border-b border-dotted  text-normal text-center uppercase tracking-wide p-2 w-52 pt-3 dark:border-slate-900 mb-5">Professional Journey</div> 

  
  
   <WorkTimeline/></div>
 <div className="timeline col-span-2 pl-8 pr-8"> 
 <div className="ml-auto mr-auto font-mono font-bold border-t border-b border-dotted text-normal text-center uppercase tracking-wide p-2 w-52 pt-3 dark:border-slate-900 mb-5">Formal Education</div> 
    
 
 <EducationTimeline/></div>



      </div>



  )}
 
export default about;

