import { useFormContext} from "react-hook-form"; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { ErrorMessage } from "@hookform/error-message";
import type { ContactType } from "../../../../types/contact";

const TimeCpn = () => {
    //react-hook-form
      const {
        register, //inputなどに入力された値を参照するために使う
        formState:{errors},
    } = useFormContext<ContactType>();
    return (
      <div className="py-3">

        <div className="md:flex items-center space-y-3 md:space-y-0">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-secondary">必須</div>
          <span>お電話ご希望時間</span>
       
        </div>

        <div className="basis-full md:flex space-x-0 md:space-x-2">
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
        <div className="md:basis-1/3">
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
    );
}

export default TimeCpn;