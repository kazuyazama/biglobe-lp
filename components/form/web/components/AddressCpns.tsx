import React, { Dispatch, FC, SetStateAction,useState } from "react";
import { useFormContext} from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message";

import type { ContactType } from "../../../../types/contact";
import type { Adress } from "../../../../types/PostalJP";

type Props = {
  handleTatemono:string;
  setHandleTatemono:Dispatch<SetStateAction<string>>;
  setValue:Dispatch<SetStateAction<string>>;
  address:Adress | null;
  error:Error | null;
}

const AddressCpns = ({handleTatemono,setHandleTatemono,setValue,address,error}:Props) => {

    
    //react-hook-form
      const {
        register, //inputなどに入力された値を参照するために使う
        formState:{errors},
    } = useFormContext<ContactType>();
    return (
      <>
      <div className="py-3">

      <div className="md:flex items-center space-y-3 md:space-y-0">
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
            onChange: (e) => setHandleTatemono(e.target.value),
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
        <label className="md:flex items-center space-y-3 md:space-y-0">
          <div className="basis-1/3 space-x-2">
          <div className="badge badge-secondary">必須</div>
            <span>設置先郵便番号</span>
          </div>
        <input
          type="text"
          className="input w-full input-bordered  "
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
        <div className="md:basis-1/3">
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
        <label className="md:flex items-center space-y-3 md:space-y-0">
          <div className="basis-1/3 space-x-2">
          <div className="badge badge-secondary">必須</div>
          <span>設置先ご住所</span>
          </div>
        <input
          type="text"
          className="input w-full input-bordered"
          defaultValue={!error ? `${address ? address.prefecture : ''}${address ? address.address1 : ''}${address ? address.address2 : ''}`: '住所が所得できませんでした'}
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
        <label className="md:flex items-center space-y-3 md:space-y-0">
          <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>建物名・部屋番号</span>
          </div>
        <input
          type="text"
          className="input w-full "
          placeholder="横山第二ビル 2-A"
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

    </>

    );

}

export default AddressCpns;