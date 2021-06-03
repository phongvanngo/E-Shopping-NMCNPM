import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseMenu from './base';

class MainMenu extends BaseMenu {

    render() {
        const { demo } = this.props;
        return (
            <nav className="main-nav" onClick={ this.activeNav  }>
                <ul className="menu sf-arrows">
                    <li className="megamenu-container active">
                        <Link to={ `${process.env.PUBLIC_URL}/demo-${demo}` } className="sf-with-ul">Home</Link>

                        <div className="megamenu demo">
                            <div className="menu-col">
                                <div className="menu-title">Choose your demo</div>

                                <div className="demo-list">
                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-1` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/1.jpg)'} }></span>
                                            <span className="demo-title">01 - furniture store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-2` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/2.jpg)'} }></span>
                                            <span className="demo-title">02 - furniture store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-3` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/3.jpg)'} }></span>
                                            <span className="demo-title">03 - electronic store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-4` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/4.jpg)'} }></span>
                                            <span className="demo-title">04 - electronic store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-5` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/5.jpg)'} }></span>
                                            <span className="demo-title">05 - fashion store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-6` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/6.jpg)'} }></span>
                                            <span className="demo-title">06 - fashion store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-7` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/7.jpg)'} }></span>
                                            <span className="demo-title">07 - fashion store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-8` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/8.jpg)'} }></span>
                                            <span className="demo-title">08 - fashion store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-9` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/9.jpg)'} }></span>
                                            <span className="demo-title">09 - fashion store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-10` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/10.jpg)'} }></span>
                                            <span className="demo-title">10 - shoes store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-11` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/11.jpg)'} }></span>
                                            <span className="demo-title">11 - furniture simple store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-12` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/12.jpg)'} }></span>
                                            <span className="demo-title">12 - fashion simple store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-13` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/13.jpg)'} }></span>
                                            <span className="demo-title">13 - market</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-14` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/14.jpg)'} }></span>
                                            <span className="demo-title">14 - market fullwidth</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-15` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/15.jpg)'} }></span>
                                            <span className="demo-title">15 - lookbook 1</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-16` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/16.jpg)'} }></span>
                                            <span className="demo-title">16 - lookbook 2</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-17` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/17.jpg)'} }></span>
                                            <span className="demo-title">17 - fashion store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-18` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/18.jpg)'} }></span>
                                            <span className="demo-title">18 - fashion store (with sidebar)</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-19` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/19.jpg)'} }></span>
                                            <span className="demo-title">19 - games store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-20` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/20.jpg)'} }></span>
                                            <span className="demo-title">20 - book store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-21` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/21.jpg)'} }></span>
                                            <span className="demo-title">21 - sport store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-22` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/22.jpg)'} }></span>
                                            <span className="demo-title">22 - tools store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-23` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/23.jpg)'} }></span>
                                            <span className="demo-title">23 - fashion left navigation store</span>
                                        </Link>
                                    </div>

                                    <div className="demo-item hidden">
                                        <Link to={ `${process.env.PUBLIC_URL}/demo-24` } target="_blank">
                                            <span className="demo-bg" style={ {backgroundImage: 'url(assets/images/menu/demos/24.jpg)'} }></span>
                                            <span className="demo-title">24 - extreme sport store</span>
                                        </Link>
                                    </div>

                                </div>

                                <div className="megamenu-action text-center">
                                    <Link to="#ViewAll" className="btn btn-outline-primary-2 view-all-demos" onClick={ this.showAllDemos }><span>View All Demos</span><i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="sf-with-ul">Shop</Link>

                        <div className="megamenu megamenu-md">
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="menu-col">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="menu-title">Shop with sidebar</div>
                                                <ul>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop List</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/2cols` }>Shop Grid 2 Columns</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>Shop Grid 3 Columns</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/4cols` }>Shop Grid 4 Columns</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/market` }><span>Shop Market<span className="tip tip-new">New</span></span></Link></li>
                                                </ul>

                                                <div className="menu-title">Shop no sidebar</div>
                                                <ul>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/fullwidth` }>Shop Fullwidth No Sidebar</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="menu-title">Product Category</div>
                                                <ul>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed` }>Product Category Boxed</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/category/fullwidth` }><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                                                </ul>
                                                <div className="menu-title">Shop Pages</div>
                                                <ul>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>Cart</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/checkout` }>Checkout</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>Wishlist</Link></li>
                                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/dashboard` }>My Account</Link></li>
                                                    <li><Link to="#Lookbook">Lookbook</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="banner banner-overlay">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner banner-menu">
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/menu/banner-1.jpg` } alt="Banner" />

                                            <div className="banner-content banner-content-top">
                                                <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/27` } className="sf-with-ul">Product</Link>

                        <div className="megamenu megamenu-sm">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="menu-col">
                                        <div className="menu-title">Product Details</div>
                                        <ul>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/default/27` }>Default</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/centered/28` }>Centered</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/extended/29` }><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/gallery/30` }>Gallery</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/sticky/34` }>Sticky Info</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/sidebar/32` }>Boxed With Sidebar</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/fullwidth/33` }>Full Width</Link></li>
                                            <li><Link to={ `${process.env.PUBLIC_URL}/product/masonry/35` }>Masonry Sticky Info</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="banner banner-overlay">
                                        <Link to={ `${process.env.PUBLIC_URL}/product/centered/27` }>
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/menu/banner-2.jpg` } alt="Banner" />

                                            <div className="banner-content banner-content-bottom">
                                                <div className="banner-title text-white">New Trends<br /><span><strong>spring {(new Date()).getFullYear() }</strong></span></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">Pages</Link>

                        <ul>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">About</Link>

                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About 01</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/about-2` }>About 02</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul">Contact</Link>

                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact 01</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact-2` }>Contact 02</Link></li>
                                </ul>
                            </li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Login</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQs</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/404` }>Error 404</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/pages/coming-soon` }>Coming Soon</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="sf-with-ul">Blog</Link>

                        <ul>
                            <li><Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>Classic</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/blog/listing` } >Listing</Link></li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` } className="sf-with-ul">Grid</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` }>Grid 2 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/3cols` }>Grid 3 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/4cols` }>Grid 4 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` }>Grid sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` } className="sf-with-ul">Masonry</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` }>Masonry 2 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/3cols` }>Masonry 3 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/4cols` }>Masonry 4 columns</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` }>Masonry sidebar</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` } className="sf-with-ul">Mask</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` }>Blog mask grid</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/masonry` }>Blog mask masonry</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/single/100` } className="sf-with-ul">Single Post</Link>
                                <ul>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single/100` }>Default with sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-2/101` }>Fullwidth no sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-3/102` }>Fullwidth with sidebar</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={ `${process.env.PUBLIC_URL}/elements/list` } className="sf-with-ul">Elements</Link>

                        <ul>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/products` }>Products</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/typography` }>Typography</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/titles` }>Titles</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/banners` }>Banners</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/categories` }>Product Category</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/video-banners` }>Video Banners</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/buttons` }>Buttons</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/accordions` }>Accordions</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/tabs` }>Tabs</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/testimonials` }>Testimonials</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/blog-posts` }>Blog Posts</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/portfolios` }>Portfolio</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/cta` }>Call to Action</Link></li>
                            <li><Link to={ `${process.env.PUBLIC_URL}/elements/icon-boxes` }>Icon Boxes</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export const mapStateToProps = ( state ) => ({
    demo: state.demo.current
})

export default connect( mapStateToProps )( MainMenu );