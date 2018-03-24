import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import HeaderLogo from '../image/BigLogo.png'

const Header = () => {
  return (
    <div className = "header">
    	<div className ="header-left">
    	    <img src={HeaderLogo} className="headerLogo" alt="logo" />
    	</div>
    	<div className ="header-right">
        	<NavLink exact to="/" className="item" activeClassName="active">여기는 어디죠?</NavLink>
        	<NavLink to="/lesson" className="item" activeClassName="active">배울 거리</NavLink>
        	<NavLink to="/board" className="item" activeClassName="active">네 생각이 궁금해</NavLink>
        	<NavLink to="/qna" className="item" activeClassName="active">질문할래요</NavLink>
        	<NavLink to="/mypage" className="item" activeClassName="active">마이 페이지</NavLink>
        	<NavLink to="/login" className="item" activeClassName="active">회원 가입</NavLink>
    	</div>
    </div>
  )
}

export default Header;