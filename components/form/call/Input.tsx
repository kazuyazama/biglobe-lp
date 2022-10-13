import React from "react";
import { useFormContext, SubmitHandler, } from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message";

import { useRouter } from "next/router";

const Input = () => {
    const router = useRouter();

    const {
        register, //inputなどに入力された値を参照するために使う
        handleSubmit,
        formState:{errors,isValid},
    } = useFormContext();

    const onSubmit = async (data: any) => {
       //ここでバリデーション用APIを叩くなど処理をする想定
        router.push(`/form/call/?confirm=check`)
    }


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-unit">
          <p className="form-unit-title">お名前</p>
          <input
            type="text"
            className="input-text"
            placeholder="山田太郎"
            {...register("name", {
              required: "お名前は必須項目です。"
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) =>
              message ? <p className="form-validateMessage">{message}</p> : null
            }
          />
        </div>

        <div className="form-unit">
          <p className="form-unit-title">連絡先</p>
          <input
            type="tel"
            className="input-text"
            placeholder="09011112222"
            {...register("tel", {
              required: "電話番号は必須項目です。"
            })}
          />
          <ErrorMessage
            errors={errors}
            name="tel"
            render={({ message }) =>
              message ? <p className="form-validateMessage">{message}</p> : null
            }
          />
        </div>

        <div className="form-unit">
          <p className="form-unit-title">お問い合わせ内容</p>
          <textarea
            className="input-textarea"
            placeholder="お問い合わせ内容を入力"
            {...register("content", {
              required: "お問い合わせ内容は必須項目です。"
            })}
          />
          <ErrorMessage
            errors={errors}
            name="content"
            render={({ message }) =>
              message ? <p className="form-validateMessage">{message}</p> : null
            }
          />
        </div>

        <div className="form-actionArea">
          {!isValid && (
            <>
              <p className="form-validateMessage">
                まだ全ての必須項目の入力が完了していません。
              </p>
            </>
          )}
          <div className="form-buttonWrapper">
            <button type="submit" className="form-submitButton">
              入力内容を確認する
            </button>
          </div>
        </div>
      </form>
        </>
    );
}

export default Input;