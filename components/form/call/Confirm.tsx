import { useRouter } from "next/router";
import { useFormContext, SubmitHandler } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import {init,send} from '@emailjs/browser';
import Link from "next/link";

import type { CallContactType } from "../../../types/CallContactType";

const Confirm = () => {

    const router = useRouter();

    const {
        handleSubmit,
        getValues,
        reset,
        formState:{isValid} //form内の入力の有無や送信の状態などを取得 isValid以外にも色々ある
    } = useFormContext<CallContactType>();

   const values = getValues();
   

   if(!isValid) {
    router.push(`/form/call`)
   }

   const onSubmit:SubmitHandler<CallContactType> = async (data) => {
      //emailjsに送信する処理
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      if(
          userID !== undefined &&
          serviceID !== undefined &&
          templateID !== undefined
      ) {
          init(userID)  
          send(serviceID,templateID ,data)
          .then(() => {
          
          router.push({
            pathname:"/form/call/complete",
            query:{display:"ok"}
          },"/form/call/complete"
          )}, () => {
          alert('送信出来ませんでした');
          })
          reset({week:"",time:""}); //{}の中はリセット後、underfinedになるのを防ぐ処理
          
      }
    
   }
  
    return (
        <>
        
        <div className="overflow-x-hidden pb-20">
   

        <div className="container mx-auto  px-5 lg:px-40 ">
        <div className="text-sm breadcrumbs pb-10">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><a>電話相談</a></li> 
        </ul>
        </div>


        <div className="text-center">

          <h1 className="pb-10 text-xl lg:text-2xl font-semibold">入力内容確認</h1>
          <ul className="steps w-1/2">
          <li className="step step-primary">ご入力</li>
          <li className="step step-primary">ご確認</li>
          <li className="step">完了</li>
          </ul>

        </div>
        
     

        <div className="flex flex-row ">
        <div className="basis-full">

        <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pt-5 mb-5 border-b text-xl text-primary font-bold">お客様情報</p>
      

        {/* お名前入力欄 */}
        <div className="py-3 ">
          <div className="lg:flex items-center"> 
            <p className="basis-1/3">お名前（フルネーム）</p> 
            <p className="basis-full">{values.name}</p> 
          </div>
        </div>

        {/* フリガナ入力欄 */}
        <div className="py-3 ">
          <div className="lg:flex items-center"> 
            <p className="basis-1/3">フリガナ（フルネーム）</p> 
            <p className="basis-full">{values.furigana}</p> 
          </div>
        </div>

     

       

        {/* メールアドレス入力欄 */}

        <div className="py-3 ">
          <div className="lg:flex items-center"> 
            <p className="basis-1/3">メールアドレス</p> 
            <p className="basis-full">{values.email}</p> 
          </div>
        </div>


        {/* 折り返し電話番号入力欄 */}
        <div className="py-3 ">
          <div className="lg:flex items-center"> 
            <p className="basis-1/3">電話番号</p> 
            <p className="basis-full">{values.tel}</p> 
          </div>
        </div>


     

        <p className="pt-5 mb-5 border-b text-xl text-primary font-bold">確認のご連絡日時のご希望</p>
    


        {/* 確認お電話ご希望時間帯入力欄 */}

     

        <div className="py-3">
          <div className="lg:flex items-center"> 
            <p className="basis-1/3">お電話ご希望日時</p> 
            <p className="basis-full">{values.week + values.time && `${values.week}の${values.time}`}</p> 
          
       
    
          </div>
        </div>

    
      

      



        {/* ご質問など入力欄 */}


        <div className="py-3 ">
          <div className="lg:flex items-center"> 
            <p className="basis-1/3">ご質問など</p> 
            <p className="basis-full ">{values.question}</p> 
          </div>
        </div>


        <div className="form-control py-6">
          <label className="label cursor-pointer self-center space-x-2">
            <input type="checkbox" 
            value="個人情報のお取り扱いに同意する" 
            className="checkbox checked:bg-blue-500" 
            checked
            />
            <span className="label-text">個人情報のお取り扱いに同意する</span> 
          </label>
    
        </div>

      
        <div className="basis-full flex justify-center space-x-10 items-center">
          <button type="submit" className="btn btn-primary w-40 ">送信する</button>
          <Link href="/form/call">
                <a className="btn btn-ghost">入力内容を修正する</a>
          </Link>
        </div>
      </form>
      </div>

      </div>

      </div>
      </div>
   
        </>
    );
}

export default Confirm;