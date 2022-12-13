import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Campaign from '../components/campaign';
import ContactSection from '../components/ContactSection';
import Faq from '../components/Faq';
import Flow from '../components/Flow';
import Onayami from '../components/Onayami';
import Point from '../components/Point';
import Strong from '../components/Strong';
import Crosing from '../components/Crosing';

import type { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {
  
  return (
    <> 
    {/* サイト公開OKになったらnoindexを外す */}
    <NextSeo noindex={true} />
    <div className='overflow-x-hidden'>
      {/* topimage */}
      <section className='container pt-20' id='top'>
        {/* <div className='bg-top-background w-screen bg-cover bg-left'> */}
        <div className='bg-top-background w-screen bg-cover bg-bottom'>
    
        
          
        <div className='container mx-auto sm:px-20 '>
          {/* <figure><img src="/images/main/lp_pc.png" alt="topimage"/></figure> */}
          <figure className='pt-10 hidden lg:block'><Image loader={({src}) => src} src="/main/top/newMainVisual.svg" alt="賃貸住宅の方にお住まいの方でも安心。ビッグローブ光なら何回引っ越しても工事費無料！インターネット回線はBIGLOBEが提供するビッグローブ光がおすすめ！当社からのお申し込みで、「最大35,000円キャッシュバック」or「キャッシュバック＋工事費無料（合計29,800円相当お得！）」の選べるキャンペーン実施中！" width={1000} height={500} layout="responsive"   /></figure>
          <figure className='pt-5 block lg:hidden'><Image loader={({src}) => src} src="/main/top/mainVisual(SPver).svg" alt="賃貸住宅の方にお住まいの方でも安心。ビッグローブ光なら何回引っ越しても工事費無料！インターネット回線はBIGLOBEが提供するビッグローブ光がおすすめ！当社からのお申し込みで、「最大35,000円キャッシュバック」or「キャッシュバック＋工事費無料（合計29,800円相当お得！）」の選べるキャンペーン実施中！" width={470} height={650} layout="responsive" className='w-full' /></figure>
       
        </div>

        </div>
       
      </section>


      <section className='container mx-auto md:px-20'>

        {/* news */}

        {/* <div className='flex justify-center my-2 md:my-5'>
        <div className='flex items-center space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h1 className='text-xs md:text-base'>法改正により、よりお得にご利用ができるようになりました。</h1>
   
        </div>

      
        </div> */}

      </section>

    
      <section className=' bg-accent py-4 md:py-6  border-secondary'>
      <div className='container mx-auto md:px-20'>
      <ContactSection />
      </div>
      </section>



       
      <section className='bg-sky-200 pb-20' >
      <div className='container mx-auto px-2 md:px-20'>

      <Strong />
       
      </div>

      </section>

      <section className='bg-base-100 '>
      {/* <div className='container mx-auto px-2 md:px-20'> */}
      <div className='container mx-auto md:px-20'>
      <Onayami />
      </div>
      </section>



      <section className='bg-sky-200 pt-20 md:pt-40 pb-20 ' id='cost'>
      <div className='container mx-auto px-2 md:px-20 '>
      

      <Point />
      </div>

      </section>

     

      <section className='bg-yellow-50 pb-20 ' id='campaign'>
      <div className='container mx-auto px-2 md:px-20 '>

      <Campaign />
         
      </div>

      </section>

      <section className='bg-accent py-4 md:py-6'>
      <div className='container mx-auto md:px-20 '>

      <ContactSection />
      </div>

      </section>

      <section className='bg-sky-200 pb-20' id='nagare'>
      <div className='container mx-auto px-2 md:px-20 '>

         <Flow />

      </div>

      </section>

     

      <section className='bg-base-100 pb-20' id='faq'>
      <div className='container mx-auto px-2 md:px-20 '>

        <Faq />

         
      </div>

      </section>


      <section className='bg-sky-200 '>
      <div className='container mx-auto px-2 md:px-20 '>

        <Crosing />
     

      </div>

      </section>

      <section className='bg-accent py-4 md:py-6  border-y-2 border-secondary'>
      <div className='container mx-auto md:px-20 '>

      <ContactSection />
      </div>

      </section>

      
      
    </div>
  </>
   
  )
}

export default Home;