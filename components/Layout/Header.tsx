import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import {IoIosArrowDroprightCircle} from "react-icons/io"
import {AiOutlineForm} from "react-icons/ai"


const Header = () => {
    return (
        <div className="w-full fixed z-50">
        <div className="navbar bg-base-100 md:px-20 md:py-3 ">
            <div className="navbar-start ">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Scroll to="top" smooth={true} duration={600}>HOME</Scroll>
                    </li>
                    <li>
                        <Scroll to="campaign" smooth={true} duration={600} offset={-60}>キャンペーン</Scroll>
                    </li>
                    <li>
                        <Scroll to="cost" smooth={true} duration={600} offset={-60}>料金</Scroll>
                    </li>
                    <li>
                        <Scroll to="nagare" smooth={true} duration={600} offset={-60}>開通までの流れ</Scroll>
                    </li>
                    <li>
                        <Scroll to="faq" smooth={true} duration={600} offset={-60}>FAQ</Scroll>
                    </li>
                   
                </ul>
                </div>

             

                <div className='normal-case '>
                <Link href="/">
                <a className="flex w-40 pl-1 pr-4 md:pl-1 md:pr-0 ">
                <Image loader={({src}) => src} src="/logo/hikari_01.png" width={180} height={35} alt="" />
                </a>
                </Link>
                </div>
                
               
                
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
            <div className="navbar-end flex ">
                <Link href="/form/web">
                <a className=" btn btn-secondary btn-circle w-[150px] md:w-48 lg:w-52 md:px-3  drop-shadow-lg outline outline-1 outline-offset-1 outline-pink-500 ">
                    <div className="inline-flex items-center space-x-1 lg:space-x-2 ">
                    <AiOutlineForm className='md:text-xl' />
                    <span>Webお申し込み</span>
                    <IoIosArrowDroprightCircle className='md:text-xl '/>
                    </div>
                </a>
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