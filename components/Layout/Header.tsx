import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

const Header = () => {
    return (
        <div className="w-full fixed z-10">
        <div className="navbar bg-base-100 ">
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
                <div className="flex flex-col">
                <a className="btn btn-ghost normal-case md:text-lg"><img src="/vercel.svg" alt="" /></a>
               
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
            <div className="navbar-end">
                <Link href="/form/web">
                <a className="btn">Webお申し込み</a>
                </Link>
            </div>
        </div>
        <div className="bg-base-100 text-center">
        <p className="text-xs ">ビッグローブ光正規代理店株式会社リスターつ</p>
        </div>
        </div>
    );
}

export default Header;