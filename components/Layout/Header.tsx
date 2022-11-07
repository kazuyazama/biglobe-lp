import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import {IoIosArrowDroprightCircle} from "react-icons/io"
import {AiOutlineForm} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"


const Header = () => {
    return (
        <div className="w-full fixed z-50">
        <div className="navbar bg-base-100 md:px-20 md:py-3 ">
            <div className="navbar-start ">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                    <div className='border p-3 bg-primary rounded-lg'>
                    <FiMenu size={25} className='text-white' />
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                </label>
                <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-sky-100 rounded-box w-56 hover-bordered ">
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
                <a className="flex w-40 px-3 md:px-0 ">
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
                <a className=" btn btn-secondary rounded-full w-[160px] md:w-48 lg:w-52 md:px-3 border-double border-4 border-base-100 ">
                    <div className="inline-flex items-center space-x-1 lg:space-x-2 justify-between  ">
                    <AiOutlineForm className='md:text-xl' />
                    <span className='text-slate-100 whitespace-nowrap'>Webお申し込み</span>
                    <IoIosArrowDroprightCircle className='md:text-xl'/>
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