import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import Logo from '../logo';
import MainMenu from './common/main-menus/menu-1';
import CartMenu from './common/cart-menus/menu-1';
import SearchToggle from './common/search-toggle';
import LoginModal from '../../features/login-modal';

import { showModal } from '../../../actions';
import { stickyHeaderHandler } from '../../../utils/utils';

class HeaderThree extends Component {

    constructor(props) {
        super(props);
        this.openLoginModal = this.openLoginModal.bind(this);
    }

    openLoginModal(e) {
        this.props.showModal('login');
        e.preventDefault();
    }

    componentDidMount() {
        window.addEventListener('scroll', stickyHeaderHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', stickyHeaderHandler);
    }
    
    render() {
        const { wishlist } = this.props;
        return (
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <div className="header-dropdown">
                                <Link to="#">USD</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">Eur</Link></li>
                                        <li><Link to="#">Usd</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-dropdown">
                                <Link to="#">Eng</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">English</Link></li>
                                        <li><Link to="#">French</Link></li>
                                        <li><Link to="#">Spanish</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <ul className="top-menu">
                                <li>
                                    <Link to="#">Links</Link>
                                    <ul>
                                        <li><Link to="tel: "><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }><i className="icon-heart-o"></i>My Wishlist <span>({wishlist.length})</span></Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about`}  >About Us</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact Us</Link></li>
                                        <li><Link to="#login" data-toggle="modal" onClick={ this.openLoginModal }><i className="icon-user"></i>Login</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-middle sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                            <Logo logo="logo.png"/>
                            <MainMenu />
                        </div>
                        <div className="header-right">
                            <SearchToggle />
                            <CartMenu/>
                        </div>
                    </div>
                </div>
                <LoginModal />
            </header>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps, { showModal } )( HeaderThree );