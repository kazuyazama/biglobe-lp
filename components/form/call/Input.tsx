import React from "react";
import { useFormContext, SubmitHandler, } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import Link from "next/link";
import type { CallContactType } from "../../../types/CallContactType";

import InputCpn from "../call/components/InputCpn";
import TimeWeek from "./components/TimeWeek";



const Input = () => {
    const router = useRouter();

    //react-hook-form
    const {
        register, //inputなどに入力された値を参照するために使う
        handleSubmit,
        formState:{errors,isValid},
    } = useFormContext<CallContactType>();

   

    const onSubmit:SubmitHandler<CallContactType> = async (data) => {
        console.log(data)
       //ここでバリデーション用APIを叩くなど処理をする想定
        router.push(`/form/call/?confirm=check`)
    }

    return (
        <>
         <div className="overflow-x-hidden pb-20">
      
        <div className="container mx-auto px-5 lg:px-40">
        <div className="text-sm breadcrumbs pb-10">
        <ul>
            <li><Link href="/"><a>Home</a></Link></li> 
            <li><a>電話相談</a></li> 
        </ul>
        </div>

        <div className="text-center">

          <h1 className="pb-10 text-xl lg:text-2xl">折り返し電話お申し込み予約</h1>
          <p>
          ご希望の日時に当社専門オペレーターよりお電話を差し上げます。
          お電話で専門オペレーターにご相談・ご質問頂いた上でSoftBank 光をお申し込み頂けます。
          お電話でのお申し込みでも、WEBお申し込みと同様のキャンペーンが適用されます。
          </p>
          <ul className="steps w-full lg:w-1/2 pt-10">
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

        <InputCpn title='お名前(フルネーム)' type="text" placeholder="山田太郎" register={register("name", {
              required:`お名前は必須項目です。` 
            })} errorname="name"
            />

        {/* フリガナ入力欄 */}


        <InputCpn title='フリガナ(フルネーム' type="text" placeholder="ヤマダタロウ" register={register("furigana", {
              required:`フリガナは必須項目です。` 
            })} errorname="furigana"
            />

        
  
        {/* メールアドレス入力欄 */}

        <InputCpn title='メールアドレス' type="email" placeholder="yamada@gmail.com" register={register("email", {
              required:`メールアドレスは必須項目です。` 
            })} errorname="email"
            />


        {/* 折り返し電話番号入力欄 */}

        <InputCpn title='折り返し電話番号' type="tel" placeholder="09011112222" register={register("tel", {
              required:`電話番号は必須項目です。` 
            })} errorname="tel"
            />    
      

        <p className="pt-5 mb-5 border-b text-xl text-primary font-bold">確認のご連絡日時のご希望</p>


        {/* 確認お電話ご希望時間帯入力欄 */}

        <TimeWeek 
        time={'曜日'} 
        week={'時間帯'} 
        registerWeek={register("week")} 
        registerTime={register("time")}
            />

        {/* <div className="pb-3">

        <div className="lg:flex items-center space-y-3 lg:space-y-0">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-primary">任意</div>
          <span>お電話ご希望時間</span>
       
        </div>

        <div className="basis-full flex space-x-0 lg:space-x-2">
      
        <div className="form-control">
        <label className="label cursor-pointer self-start space-x-2">
        <select className="select" {...register("week")}>
          <option disabled selected>曜日</option>
          <option value="いつでも">いつでも</option>
          <option value="月曜">月曜</option>
          <option value="火曜">火曜</option>
          <option value="水曜">水曜</option>
          <option value="木曜">木曜</option>
          <option value="金曜">金曜</option>
        </select>
        </label>
        </div>

        <div className="form-control">
        <label className="label cursor-pointer self-start space-x-2">
        <select className="select" {...register("time")}>
          <option disabled selected>時間帯</option>
          <option value="いつでも">いつでも</option>
          <option value="12時~13時">12時~13時</option>
          <option value="13時~14時">13時~14時</option>
          <option value="14時~15時">14時~15時</option>
          <option value="15時~16時">15時~16時</option>
          <option value="16時~17時">16時~17時</option>
          <option value="17時~18時">17時~18時</option>
          <option value="18時~19時">18時~19時</option>
          <option value="19時~20時">19時~20時</option>
          <option value="20時~21時">20時~21時</option>
        </select>
        </label>
      
         
        </div>

    
        </div>


        </div>

        <div className="flex">
        <div className="lg:basis-1/3">
        </div >
        <p className="basis-full text-error">※ご希望の時間に添えない場合もございます。予めご了承ください。</p> 
        </div>
        </div> */}

       
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

        <div className="form-control py-3 lg:py-5 ">
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


          <div className="pt-3" >
            <button type="submit" className="btn btn-primary">
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