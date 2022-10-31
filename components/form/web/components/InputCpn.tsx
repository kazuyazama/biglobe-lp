//名前、フリガナ、生年月日、メールアドレス、折り返し電話番号　入力欄だけコンポーネント化

import { useFormContext, UseFormRegisterReturn, } from "react-hook-form"; 
import { ErrorMessage } from "@hookform/error-message";
import type { ContactType } from "../../../../types/contact";

type Props = {
  title:string;
  placeholder:string;
  type:string;
  register?:UseFormRegisterReturn;
  errorname:string;
}

const InputCpn = ({title,placeholder,type,register,errorname}:Props) => {
    //react-hook-form
      const {
        formState:{errors},
    } = useFormContext<ContactType>();
    return (
        <div className="pb-3 space-y-3">
          <label className="md:flex items-center space-y-3 md:space-y-0">
            <div className="basis-1/3 space-x-2">
            <div className="badge badge-secondary">必須</div>
            <span>{title}</span>
            </div>
          <input
            type={type}
            className="input w-full  input-bordered "
            placeholder={placeholder}
            {...register}
          /> 
          </label>
         
          <ErrorMessage
            errors={errors}
            name={errorname}
            render={({ message }) =>
              message ? <p className="text-error">{message}</p> : null
            }
          />
        </div> 
        
    );
}

export default InputCpn;