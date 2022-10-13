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
    router.push(`/form/call`)
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
          router.push("/form/call/complete");;
          }, () => {
          alert('送信出来ませんでした');
          })
          reset();
      }
    
   }
  
    return (
        <>
        <h1>入力内容確認画面</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-unit">
            <p className="form-unit-title">お名前</p>
            <p>{values.name}</p>
          </div>

          <div className="form-unit">
            <p className="form-unit-title">電話番号</p>
            <p>{values.tel}</p>
          </div>

          <div className="form-unit">
            <p className="form-unit-title">お問い合わせ内容</p>
            <p>{values.content}</p>
          </div>

          <div className="form-actionArea">
            <div className="form-buttonWrapper">
              <button type="submit" className="form-submitButton">
                送信する
              </button>
              <Link href="/form/call">
                <a className="form-backButton">入力内容を修正する</a>
              </Link>
            </div>
          </div>
        
        </form>
        </>
    );
}

export default Confirm;