import React, { FC, useState } from "react";
import { useFormContext, SubmitHandler, } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import Link from "next/link"
import { usePostalJp } from 'use-postal-jp'

import TimeCpn from "./components/TimeCpn";
import WeekCpn from "./components/WeekCpn";
import AddressCpns from "./components/AddressCpns";

import type { ContactType } from "../../../types/contact";
import type { Adress } from "../../../types/PostalJP";

//inputの簡単なやつだけコンポーネント化 後で戻すかも
import InputCpn from "./components/InputCpn";


const Input:FC = () => {
    const router = useRouter();

    //郵便番号入れたら自動入力する為の処理

    const [value, setValue] = useState('')
  
    const [address, loading, error] = usePostalJp<Adress>(value, value.length >= 7)

    //マンションの場合は、建物名と部屋番号入力欄が出る様に保持するstate

    const [handleTatemono, setHandleTatemono] = useState('集合住宅');
  
    //react-hook-form
    const {
        register, //inputなどに入力された値を参照するために使う
        handleSubmit,
        formState:{errors,isValid},
    } = useFormContext<ContactType>();

    const onSubmit:SubmitHandler<ContactType>  = async (data) => {
        console.log(data)
       //ここでバリデーション用APIを叩くなど処理をする想定
        await router.push(`/form/web/?confirm=check`)
    }

    return (
        <>
        <div className="overflow-x-hidden pb-20">
    
        <div className="container mx-auto px-5 lg:px-40 ">
        <div className="text-sm breadcrumbs pb-10">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><a>お申し込みフォーム</a></li> 
        </ul>
        </div>

        <div className="text-center">

          <h1 className="pb-10 text-xl lg:text-2xl">ビッグローブ光お申し込みフォーム</h1>
          <ul className="steps w-full lg:w-1/2 ">
          <li className="step step-primary">ご入力</li>
          <li className="step">ご確認</li>
          <li className="step">完了</li>
          </ul>


        </div>

        <div className="flex flex-row  ">
        <div className="basis-full">

        <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pt-5 mb-5 border-b text-xl text-primary font-bold">お客様情報</p>
      

        {/* お名前入力欄 */}
        {/* <div className="py-3 space-y-3">
          <label className="lg:flex items-center space-y-3 lg:space-y-0">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>お名前(フルネーム)</span>
            </div>
          <input
            type="text"
            className="input w-full input-bordered "
            placeholder="山田太郎"
            {...register("name", {
              required: "お名前は必須項目です。"
            })}
          /> 
          </label>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div> */}


        <InputCpn title='お名前(フルネーム)' type="text" placeholder="山田太郎" register={register("name", {
              required:`お名前は必須項目です。` 
            })} errorname="name"
            />

    


        {/* フリガナ入力欄 */}
        {/* <div className="pb-3 space-y-3">
          <label className="lg:flex items-center space-y-3 lg:space-y-0">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>フリガナ(フルネーム)</span>
            </div>
          <input
            type="text"
            className="input w-full  input-bordered "
            placeholder="ヤマダタロウ"
            {...register("furigana", {
              required: "フリガナは必須項目です。"
            })}
          /> 
          </label>
          <ErrorMessage
            errors={errors}
            name="furigana"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div> */}

        <InputCpn title='フリガナ(フルネーム)' type="text" placeholder="ヤマダタロウ" register={register("furigana", {
              required:`フリガナは必須項目です。` 
            })} errorname="furigana" />

         {/* 性別 */}

         <div className="py-3">

          <div className="lg:flex items-center space-y-3 lg:space-y-0">
          <div className="basis-1/3 space-x-2">
          <div className="badge badge-secondary">必須</div>
          <span>性別</span>
          </div>

          <div className="basis-full">
          <div className="form-control">
            <label className="label cursor-pointer self-start space-x-2">
              <input type="radio" 
              value="男" 
              className="radio checked:bg-primary" 
              {...register("sex", {
                required: "性別は必須項目です。",
              })}
              />
              <p className="label-text">男</p> 
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer self-start space-x-2">
              <input type="radio" 
              value="女" 
              className="radio checked:bg-secondary" 
              {...register("sex", {
                required: "性別は必須項目です。",
              })}
              
              />
              <span className="label-text">女</span> 
            </label>

          </div>
          </div>

          </div>
          <ErrorMessage
              errors={errors}
              name="tatemono"
              render={({ message }) =>
                message ? <p className="text-error">{message}</p> : null
              }
          />
          </div>

  

 
        
        {/* 生年月日入力欄 */}
        {/* <div className="pb-3 space-y-3">
          <label className="lg:flex items-center space-y-3 lg:space-y-0">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>生年月日</span>
            </div>
          <input
            type="date"
            className="input w-full  input-bordered "
            placeholder="1993/12/13"
            {...register("birthday", {
              required: "生年月日は必須項目です。"
            })}
          /> 
          </label>
          <ErrorMessage
            errors={errors}
            name="birthday"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div> */}

        <InputCpn title='生年月日' type="date" placeholder="1993/12/13" register={register("birthday", {
              required:`お名前は必須項目です。` 
            })} errorname="birthday" />

           

        {/* メールアドレス入力欄 */}

        {/* <div className="pb-3 space-y-3">
          <label className="lg:flex items-center space-y-3 lg:space-y-0">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>メールアドレス</span>
            </div>
          <input
            type="email"
            className="input w-full  input-bordered "
            placeholder="yamada@gmail.com"
            {...register("email", {
              required: "メールアドレスは必須項目です。"
            })}
          /> 
          </label>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div> */}

        <InputCpn title='メールアドレス' type="email" placeholder="yamada@gmail.com" register={register("email", {
              required:`メールアドレスは必須項目です。` 
            })} errorname="email" />

        {/* 折り返し電話番号入力欄 */}
        {/* <div className="pb-3 space-y-3">
          <label className="lg:flex items-center space-y-3 lg:space-y-0">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>折り返し電話番号</span>
            </div>
          <input
            type="tel"
            className="input w-full  input-bordered "
            placeholder="09011112222"
            {...register("tel", {
              required: "電話番号は必須項目です。"
            })}
          /> 
          </label>
          <ErrorMessage
            errors={errors}
            name="tel"
            render={({ message }) =>
              message && <p className="text-error">{message}</p> 
            }
          />
        </div> */}

        <InputCpn title='折り返し電話番号' type="tel" placeholder="09011112222" register={register("tel", {
              required:`電話番号は必須項目です。` 
            })} errorname="tel" />


        <p className="pt-5 mb-5 border-b text-xl text-primary font-bold">設置先情報</p>
       

        {/* 建物のタイプ入力欄 */}  {/* 設置先郵便番号入力欄 */}  {/* 設置先ご住所入力欄 */} {/* 番地入力欄 */}
       
        <AddressCpns 
        handleTatemono={handleTatemono} 
        setHandleTatemono={setHandleTatemono}
        setValue={setValue} 
        address={address}
        error={error}
        />

        <p className="pt-5 mb-5 border-b text-xl text-primary font-bold">確認のご連絡日時のご希望</p>
      


        {/* 確認お電話ご希望時間帯入力欄 */}

        {/* <div className="py-6">

        <div className="lg:flex items-center space-y-3 lg:space-y-0">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-secondary">必須</div>
          <span>お電話ご希望時間</span>
       
        </div>

        <div className="basis-full lg:flex space-x-0 lg:space-x-2">
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="いつでも" 
            className="checkbox checked:bg-red-500" 
            {...register("time", {
              required: "お電話ご希望時間は必須項目です。"
            })}
             />
            <p className="label-text">いつでも</p> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="12時～14時" 
            className="checkbox checked:bg-blue-500" 
            {...register("time", {
              required: "お電話ご希望時間は必須項目です。"
            })}
            />
            <span className="label-text">12時～14時</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="14時～16時" 
            className="checkbox checked:bg-blue-500" 
            {...register("time", {
              required: "お電話ご希望時間は必須項目です。"
            })}
            />
            <span className="label-text">14時～16時</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="16時～18時" 
            className="checkbox checked:bg-blue-500" 
            {...register("time", {
              required: "お電話ご希望時間は必須項目です。"
            })}
            />
            <span className="label-text">16時～18時</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="18時〜20時" 
            className="checkbox checked:bg-blue-500" 
            {...register("time", {
              required: "お電話ご希望時間は必須項目です。"
            })}
            />
            <span className="label-text">18時〜20時</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="20時〜21時" 
            className="checkbox checked:bg-blue-500" 
            {...register("time", {
              required: "お電話ご希望時間は必須項目です。"
            })}
            />
            <span className="label-text">20時〜21時</span> 
          </label>
        </div>
        </div> 

        </div>
        <div className="flex">
        <div className="lg:basis-1/3">
        <ErrorMessage
            errors={errors}
            name="time"
            render={({ message }) =>
              message ? <p className="text-error ">{message}</p> : null
            }
        />
        </div>
        <p className="basis-full text-primary">※複数選択可能</p> 
        </div>
        </div> */}
        <TimeCpn />


        {/* 確認お電話希望曜日入力欄 */}

        {/* <div className="py-6">

        <div className="lg:flex items-center space-y-3 lg:space-y-0">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-secondary">必須</div>
          <span>お電話ご希望曜日</span>
          
        </div>
        

      
        <div className="basis-full lg:flex space-x-0 lg:space-x-2">


        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="いつでも" 
            className="checkbox checked:bg-red-500" 
            {...register("week", {
              required: "お電話ご希望曜日は必須項目です。"
            })}
             />
            <p className="label-text">いつでも</p> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="月曜" 
            className="checkbox checked:bg-blue-500" 
            {...register("week", {
              required: "お電話ご希望曜日は必須項目です。"
            })}
            />
            <span className="label-text">月曜</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="火曜" 
            className="checkbox checked:bg-blue-500" 
            {...register("week", {
              required: "お電話ご希望曜日は必須項目です。"
            })}
            />
            <span className="label-text">火曜</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="水曜" 
            className="checkbox checked:bg-blue-500" 
            {...register("week", {
              required: "お電話ご希望曜日は必須項目です。"
            })}
            />
            <span className="label-text">水曜</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="木曜" 
            className="checkbox checked:bg-blue-500" 
            {...register("week", {
              required: "お電話ご希望曜日は必須項目です。"
            })}
            />
            <span className="label-text">木曜</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="金曜" 
            className="checkbox checked:bg-blue-500" 
            {...register("week", {
              required: "お電話ご希望曜日は必須項目です。"
            })}
            />
            <span className="label-text">金曜</span> 
          </label>
        </div>
        </div>

        </div>
        <div className="flex">
        <div className="lg:basis-1/3" >
        <ErrorMessage
            errors={errors}
            name="week"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
        />
        </div>
         <p className="basis-full text-primary ">※複数選択可能</p> 
         </div>
        </div> */}
        <WeekCpn />


        {/* ご質問など入力欄 */}
        <div className="py-3 ">
          <label className="lg:flex items-center space-y-3 lg:space-y-0">
            <div className="basis-1/3 space-x-2 ">
            <div className="badge badge-primary ">任意</div>
              <span>ご質問など</span>
            </div>
          <textarea
            className="textarea h-24 w-full input-bordered"
            placeholder="ご質問などを入力"
            {...register("question", {
            })}
          ></textarea> 
          </label>
        
        </div>

        <div className="form-control py-5">
          <label className="label cursor-pointer self-center space-x-2">
            <input type="checkbox" 
            value="個人情報のお取り扱いに同意する" 
            className="checkbox checked:bg-blue-500" 
            {...register("privacy", {
              required: "個人情報のお取り扱いは必須項目です。"
            })}
            />
            <span className="label-text">個人情報のお取り扱いに同意する</span> 
          </label>
          <ErrorMessage
            errors={errors}
            name="privacy"
            render={({ message }) =>
              message ? <p className="text-error text-center">{message}</p> : null
            }
          />
        </div>

      
        <div className="basis-full text-center ">
          {!isValid && (
            <>
              <p className="pb-3 lg:pb-5 text-error">
                まだ全ての必須項目の入力が完了していません。
              </p>
            </>
          )}


          <div className="pt-3">
            <button type="submit" className="btn btn-primary rounded-xl text-slate-100">
              入力内容を確認する
            </button>
          </div>
        </div>
      </form>
      </div>

      </div>

      </div>

      </div>
  
        </>
    );
}

export default Input;