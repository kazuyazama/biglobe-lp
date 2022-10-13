const Faq = () => {
    return (
        <>
        <div className="text-center text-2xl py-20">よくある質問</div>

        <div className="flex flex-col space-y-6">

        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box ">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content "> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
        </div>

        <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={1} attribute is necessary to make the div focusable</p>
        </div>
        </div>
        <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={2} attribute is necessary to make the div focusable</p>
        </div>
        </div>
        <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={3} attribute is necessary to make the div focusable</p>
        </div>
        </div>

        </div>


      

        

        </>
    );
}

export default Faq;