const Point = () => {
    return (
        <>
        <h1 className="text-center text-2xl py-20">ビッグローブ光なら解決！○つのポイント</h1>

        <div className="flex flex-col space-y-10">

        
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">auスマートバリュー対応</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>
      
       
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">ipV6無料で対応</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>
      
     
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">移転費用無料</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
            </div>
        </div>
        </div>

        </div>
            
  

        </>
       
    );
}

export default Point;