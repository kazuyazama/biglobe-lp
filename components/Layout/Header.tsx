import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

const Header = () => {
    return (
        <div className="w-full fixed z-10">
        <div className="navbar bg-base-100 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#campaign">キャンペーン</a></li>
                    <li><a href="">料金</a></li>
                    <li><a>開通までの流れ</a></li>
                    <li><a>FAQ</a></li>
                   
                </ul>
                </div>

             

                
                {/* <a className="btn btn-ghost normal-case md:text-lg"><img src="/BIGLOBE光.png" alt="" /></a> */}
                <a className="normal-case text-2xl flex ">
                <Image src="/BIGLOBE光.png" width={180} height={40} alt=""  />
                {/* <Image src="/BIGLOBE-logo.png" width={35} height={15} alt="" /> */}
                </a>
                
               
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                
                <li>
                    <Scroll to="top" smooth={true} duration={600} >
                    HOME
                    </Scroll> 
                </li>
                <li>
                    <Scroll to="campaign" smooth={true} duration={600} offset={-60}>
                    キャンペーン
                    </Scroll>
                    
                </li>
                <li>
                    <Scroll to="cost" smooth={true} duration={600} offset={-60}>
                    料金
                    </Scroll>
                   
                </li>
                <li>
                    <Scroll to="nagare" smooth={true} duration={600} offset={-60}>
                    開通までの流れ
                    </Scroll>
                </li>
                <li>
                    <Scroll to="faq" smooth={true} duration={600} offset={-60} >
                    FAQ
                    </Scroll>
                </li>
               
    
                </ul>
            </div>
            <div className="navbar-end flex">
                <Link href="/form/web">
                <a className="btn btn-secondary ">Webお申し込み</a>
                </Link>
            </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-center flex justify-center flex-nowrap md:space-x-4">
        <span className="text-xs md:text-sm text-white">BIGLOBE正規代理店:株式会社リ・スターツ </span>
        <span className='text-xs md:text-sm text-white'>届出番号:C2111718</span>
       
        </div>
        </div>
    );
}

export default Header;