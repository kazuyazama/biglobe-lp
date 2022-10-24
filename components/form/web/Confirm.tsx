import { useRouter } from "next/router";
import { useFormContext, SubmitHandler } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import {init,send} from '@emailjs/browser';
import Link from "next/link";
import type { ContactType } from "../../../types/contact";

const Confirm = () => {

    const router = useRouter();

    const {
        handleSubmit,
        getValues,
        reset,
        formState:{isValid} //form内の入力の有無や送信の状態などを取得できる isValid以外にも色々ある
    } = useFormContext<ContactType>();

   const values = getValues();

   if(!isValid) {
    router.push(`/form/web`)
   }

   const onSubmit:SubmitHandler<ContactType> = async (data) => {
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
          router.push(
            {pathname:"/form/web/complete",
            query:{display:'ok'},
          },"/form/web/complete");
          }, () => {
          alert('送信出来ませんでした');
          })
          reset();
      }
    
   }
  
    return (
        <>
         <div className="overflow-x-hidden pb-20">

        <div className="container mx-auto px-5 md:px-40">
        <div className="text-sm breadcrumbs pb-10">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><a>お申し込みフォーム</a></li> 
        </ul>
        </div>


        <div className="text-center">

          <h1 className="pb-10 text-xl md:text-2xl">入力内容確認画面</h1>
          <ul className="steps w-1/2">
          <li className="step step-primary">ご入力</li>
          <li className="step step-primary">ご確認</li>
          <li className="step">完了</li>
          </ul>

        </div>
        
     

        <div className="flex flex-row ">
        <div className="basis-full">

        <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pt-5 text-xl text-primary font-bold">お客様情報</p>
        <hr />

        {/* お名前入力欄 */}
        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">お名前（フルネーム）</p> 
            <p className="basis-full">{values.name}</p> 
          </div>
        </div>

        {/* フリガナ入力欄 */}
        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">フリガナ（フルネーム）</p> 
            <p className="basis-full">{values.furigana}</p> 
          </div>
        </div>

        {/* 性別入力欄 */}
        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">性別</p> 
            <p className="basis-full">{values.sex}</p> 
          </div>
        </div>

        {/* 生年月日入力欄 */}
        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">生年月日</p> 
            <p className="basis-full">{values.birthday}</p> 
          </div>
        </div>

        {/* メールアドレス入力欄 */}

        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">メールアドレス</p> 
            <p className="basis-full">{values.email}</p> 
          </div>
        </div>


        {/* 折り返し電話番号入力欄 */}
        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">電話番号</p> 
            <p className="basis-full">{values.tel}</p> 
          </div>
        </div>


        <p className="pt-5 text-xl text-primary font-bold">設置先情報</p>
        <hr />

        {/* 建物のタイプ入力欄 */}


        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">建物のタイプ</p> 
            <p className="basis-full">{values.tatemono}</p> 
          </div>
        </div>


        {/* 設置先郵便番号入力欄 */}

        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">設置先郵便番号</p> 
            <p className="basis-full">{values.zip}</p> 
          </div>
        </div>


        

        {/* 設置先ご住所入力欄 */}

        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">設置先ご住所</p> 
            <p className="basis-full">{values.address}</p> 
          </div>
        </div>


        {/* 番地入力欄 */}


      
        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">建物名・部屋番号（集合住宅の方）</p> 
            <p className="basis-full">{values.address2}</p> 
          </div>
        </div>
    

     

        <p className="pt-5 text-xl text-primary font-bold">確認のご連絡日時のご希望</p>
        <hr />


        {/* 確認お電話ご希望時間帯入力欄 */}

        <div className="py-6">

        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">確認お電話ご希望時間帯</p> 
            {/* <p className="basis-full">{`${values.time}`}</p>  */}
            <p className="basis-full">{values.time && values.time.join()}</p> 
          </div>
        </div>

        </div>
      

        {/* 確認お電話希望曜日入力欄 */}

        <div className="py-6">

        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">確認お電話ご希望曜日</p> 
            <p className="basis-full">{values.week && values.week.join()}</p> 
          </div>
        </div>

        </div>



        {/* ご質問など入力欄 */}


        <div className="py-3 space-y-3">
          <div className="md:flex items-center"> 
            <p className="basis-1/3">ご質問など</p> 
            <p className="basis-full ">{values.question}</p> 
          </div>
        </div>


        <div className="form-control py-5">
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
          <Link href="/form/web">
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