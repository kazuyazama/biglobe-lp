import { useFormContext, UseFormRegisterReturn, } from "react-hook-form"; 

type Props = {
    time:string;
    week:string;
    registerTime:UseFormRegisterReturn;
    registerWeek:UseFormRegisterReturn;
  }


const TimeWeek = ({time,week,registerWeek,registerTime}:Props) => {
    return (
        <div className="pb-3">

        <div className="md:flex items-center space-y-3 md:space-y-0">

        <div className="basis-1/3 space-x-2">
        <div className="badge badge-primary">任意</div>
          <span>お電話ご希望時間</span>
       
        </div>

        <div className="basis-full flex space-x-0 md:space-x-2">
      
        <div className="form-control">
        <label className="label cursor-pointer self-start space-x-2">
        <select className="select" {...registerWeek}>
          <option disabled selected>{week}</option>
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
        <select className="select" {...registerTime}>
          <option disabled selected>{time}</option>
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
        <div className="md:basis-1/3">
        </div >
        <p className="basis-full text-error">※ご希望の時間に添えない場合もございます。予めご了承ください。</p> 
        </div>
        </div>
    );
}

export default TimeWeek;