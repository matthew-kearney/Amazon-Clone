import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        //logo to left (img)
        <nav className="header">
            <Link to="/">
                <img className="header_logo"
                    src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo_logotype.png"
                    alt="Amazon logo"
                />
            </Link>

            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>


            {/* 3 links */}
            <div className="header_nav">
                {/* 1st Link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionL1">Hello Matt</span>
                        <span className="header_optionL2">Sign In</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionL1">Returns</span>
                        <span className="header_optionL2">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionL1">Your</span>
                        <span className="header_optionL2">Prime</span>
                    </div>
                </Link>
            </div>
            {/* basket right side */}
            <Link to="/checkout">
                <div className="header_option_basket">
                    {/* basket icons */}
                    <ShoppingBasketIcon />
                    {/* number of items in the basket */}
                    <span className="header_optionL2 header_basket_count">0</span>
                </div>
            </Link>
        </nav>
    );
}

export default Header


//started with rfce (auto created blank starting point with correct conponent name)