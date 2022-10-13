import React from "react";
import { useFormContext, SubmitHandler, } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePostalJp } from 'use-postal-jp'

type Adress = {
  prefectureCode: string; // 都道府県コード
  prefecture: string; // 都道府県
  address1: string; // 市区町村
  address2: string; // 市区町村配下
}

  
const Input = () => {
    const router = useRouter();

      //郵便番号入れたら自動入力する為の処理

    const [value, setValue] = useState('')
  
    const [address, loading, error] = usePostalJp<Adress>(value, value.length >= 7)

    //マンションの場合は、建物名と部屋番号入力欄が出る様に保持するstate

    const [handleTatemono, setHandleTatemono] = useState('');
  
    //react-hook-form
    const {
        register, //inputなどに入力された値を参照するために使う
        handleSubmit,
        formState:{errors,isValid},
    } = useFormContext();

    const onSubmit = async (data: any) => {
       //ここでバリデーション用APIを叩くなど処理をする想定
        router.push(`/form/web/?confirm=check`)
    }

    return (
        <>
      
        <div className="container mx-auto px-40 py-20">

        <div className="text-center">

          <h1 className="py-5">ビッグローブ光お申し込みフォーム</h1>
          <ul className="steps w-1/2">
          <li className="step step-primary">ご入力</li>
          <li className="step ">ご確認</li>
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
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>お名前（フルネーム）</span>
            </div>
          <input
            type="text"
            className="input basis-full  input-bordered "
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
        </div>

        {/* フリガナ入力欄 */}
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>フリガナ（フルネーム）</span>
            </div>
          <input
            type="text"
            className="input basis-full  input-bordered "
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
        </div>

         {/* 性別 */}

         <div className="py-3">

          <div className="md:flex items-center">
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
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>生年月日</span>
            </div>
          <input
            type="date"
            className="input basis-full  input-bordered "
            placeholder="ヤマダタロウ"
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
        </div>

           

        {/* メールアドレス入力欄 */}

        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>メールアドレス</span>
            </div>
          <input
            type="email"
            className="input basis-full  input-bordered "
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
        </div>

        {/* 折り返し電話番号入力欄 */}
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>折り返し電話番号</span>
            </div>
          <input
            type="tel"
            className="input basis-full  input-bordered "
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
        </div>


        <p className="pt-5 text-xl text-primary font-bold">設置先情報</p>
        <hr />

        {/* 建物のタイプ入力欄 */}

        <div className="py-3">

        <div className="md:flex items-center">
        <div className="basis-1/3 space-x-2">
        <div className="badge badge-secondary">必須</div>
        <span>建物のタイプ</span>
        </div>

        <div className="basis-full">
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="radio" 
            value="集合住宅" 
            className="radio checked:bg-primary" 
            {...register("tatemono", {
              required: "建物タイプは必須項目です。",
              onChange: (e) => setHandleTatemono(e.target.value)
            })}
            checked={handleTatemono === '集合住宅'}
            />
            <p className="label-text">集合住宅</p> 
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="radio" 
            value="戸建" 
            className="radio checked:bg-secondary" 
            {...register("tatemono", {
              required: "建物タイプは必須項目です。",
              onChange: (e) => setHandleTatemono(e.target.value)
            })}
            checked={handleTatemono === '戸建'}
             />
            <span className="label-text">戸建</span> 
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

        {/* 設置先郵便番号入力欄 */}
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
              <span>設置先郵便番号</span>
            </div>
          <input
            type="text"
            className="input basis-full input-bordered  "
            placeholder="1112222"
            {...register("zip", {
              required: {
                value:true,
                message:"郵便番号は必須項目です。",
              },
              onChange: (e) => setValue(e.target.value) ,
            }) }
          
          /> 
          </label>
          <div className="flex">
          <div className="basis-1/3">
          <ErrorMessage
            errors={errors}
            name="zip"
            render={({ message }) =>
              message ? <p className="text-error ">{message}</p> : null
            }
          />
          </div>
           <p className="basis-full text-primary">※入力後に住所が自動入力されます</p>
           </div>
          
        </div>


        

        {/* 設置先ご住所入力欄 */}
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>設置先ご住所</span>
            </div>
          <input
            type="text"
            className="input basis-full input-bordered"
            defaultValue={`${address ? address.prefecture : ''}${address ? address.address1 : ''}${address ? address.address2 : ''}`}
            placeholder="東京都町田市森野"
            {...register("address", {
              required: {
                value:true,
                message:"設置先住所は必須項目です。",
              },
              
            })}
   
          /> 
    
    
          </label>
          <ErrorMessage
            errors={errors}
            name="address"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div>

        {/* 番地入力欄 */}
        {handleTatemono === '集合住宅' ? (
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2">
              <div className="badge badge-secondary">必須</div>
              <span>建物名・部屋番号</span>
            </div>
          <input
            type="text"
            className="input basis-full "
            placeholder="09011112222"
            {...register("address2", {
              required: "番地は必須項目です。"
            })}
          /> 
          </label>
          <ErrorMessage
            errors={errors}
            name="address2"
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div>
        ) : null}

        <p className="pt-5 text-xl text-primary font-bold">確認のご連絡日時のご希望</p>
        <hr />


        {/* 確認お電話ご希望時間帯入力欄 */}

        <div className="py-6">

        <div className="md:flex items-center">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-secondary">必須</div>
          <span>確認お電話ご希望時間帯</span>
       
        </div>

        <div className="basis-full flex space-x-2">
        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="いつでも" 
            className="checkbox checked:bg-red-500" 
            {...register("time", {
              required: "確認お電話希望時間帯は必須項目です。"
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
              required: "確認お電話希望時間帯は必須項目です。"
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
              required: "確認お電話希望時間帯は必須項目です。"
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
              required: "確認お電話希望時間帯は必須項目です。"
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
              required: "確認お電話希望時間帯は必須項目です。"
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
              required: "確認お電話希望時間帯は必須項目です。"
            })}
            />
            <span className="label-text">20時〜21時</span> 
          </label>
        </div>
        </div>

        </div>
        <div className="flex">
        <div className="basis-1/3">
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
        </div>

        {/* 確認お電話希望曜日入力欄 */}

        <div className="py-6">

        <div className="md:flex items-center">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-secondary">必須</div>
          <span>確認お電話ご希望曜日</span>
          
        </div>
        

      
        <div className="basis-full flex space-x-2">


        <div className="form-control">
          <label className="label cursor-pointer self-start space-x-2">
            <input type="checkbox" 
            value="いつでも" 
            className="checkbox checked:bg-red-500" 
            {...register("week", {
              required: "確認お電話ご希望曜日は必須項目です。"
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
              required: "確認お電話ご希望曜日は必須項目です。"
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
              required: "確認お電話ご希望曜日は必須項目です。"
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
              required: "確認お電話ご希望曜日は必須項目です。"
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
              required: "確認お電話ご希望曜日は必須項目です。"
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
              required: "確認お電話ご希望曜日は必須項目です。"
            })}
            />
            <span className="label-text">金曜</span> 
          </label>
        </div>
        </div>

        </div>
        <div className="flex">
        <div className="basis-1/3" >
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
        </div>


        {/* ご質問など入力欄 */}
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center">
            <div className="basis-1/3 space-x-2 ">
            <div className="badge badge-primary ">任意</div>
              <span>ご質問など</span>
            </div>
          <textarea
            className="textarea h-24 basis-full input-bordered"
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
              <p className="py-5 text-error">
                まだ全ての必須項目の入力が完了していません。
              </p>
            </>
          )}


          <div className="">
            <button type="submit" className="btn btn-primary">
              入力内容を確認する
            </button>
          </div>
        </div>
      </form>
      </div>

      </div>

      </div>
        </>
    );
}

export default Input;