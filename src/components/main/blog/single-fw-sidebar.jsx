import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import BlogSidebar from '../../features/sidebar/blog-sidebar';
import OwlCarousels from '../../features/owl-carousel';
import Comments from '../../features/post/comment/comments';
import Reply from '../../features/post/comment/reply';
import ErrorPage from '../../main/pages/404';

import RelatedPosts from './related-post';

import { mainSlider1 } from '../settings';
import { isIEBrowser } from '../../../utils/utils';

class SingleFullWidthSidebar extends Component {
    
    render() {
        const postId = this.props.match.params.id;
        const post = this.props.posts.filter( item => item.id.toString() === postId )[0];
        const relatedPosts = this.props.posts.slice(102, 106);

        if (!post) {
            return (
                <ErrorPage />
            )
        }

        let date = new Date(post.date);
        let options = { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" };

        return (
            <div className="main">
                <Breadcrumb title="Fullwidth With Sidebar" parent1={ ["Blog","blog/classic"] } adClass="mb-0 border-bottom-0"/>
                <div className="page-content">
                    <div className="container">
                        <figure className="entry-media">
                            { post.image.length > 1 ?

                                <OwlCarousels  adClass="owl-simple owl-light owl-nav-inside">
                                    {post.image.map( (item, index)=>
                                        <img src={ process.env.PUBLIC_URL + '/' + item } key={ index } alt="blog"/>
                                    ) }
                                </OwlCarousels> :

                                <img src={ process.env.PUBLIC_URL + '/' + post.image[0] } alt="2"/>
                            }
                        </figure>
                        <div className="row">
                            <div className="col-lg-9">
                                <article className="entry single-entry">
                                    
                                    <div className="entry-body">
                                        <div className="entry-meta">
                                            <span className="entry-author">
                                                by <Link to="#">{post.author}</Link>
                                            </span>
                                            <span className="meta-separator">|</span>
                                            <Link to="#">{date.toLocaleDateString('en-US',options) }</Link>
                                            <span className="meta-separator">|</span>
                                            <Link to="#">{post.comments} Comments</Link>
                                        </div>

                                        <h2 className="entry-title entry-title-big">
                                            {post.title}
                                        </h2>

                                        { post.category?
                                            <div className="entry-cats">
                                                in&nbsp;
                                                {post.category.map((cat, index)=> (
                                                    <span key={ index }>
                                                        <Link to="#">{cat}</Link>
                                                        {index<post.category.length-1? ', ':''}
                                                    </span>
                                                )) }
                                            </div> : ''
                                        }

                                        <div className="entry-content editor-content">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <Link to="#">ultrices sagittis</Link>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                                            <blockquote>
                                                <p>“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. ”</p>
                                            </blockquote>

                                            <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula <Link to="#">sollicitudin laoreet</Link> viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>

                                            <div className="pb-1"></div>

                                            <img src={ `${ process.env.PUBLIC_URL }/assets/images/blog/single/fullwidth-sidebar/4.jpg` } alt="blog" />
                                            <img src={ `${ process.env.PUBLIC_URL }/assets/images/blog/single/fullwidth-sidebar/5.jpg` } alt="blog" />

                                            <div className="pb-1"></div>

                                            <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. </p>

                                            <div className="pb-1"></div>

                                            <h3>Morbi interdum mollis sapien.</h3>

                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. </p>

                                            <p>Praesent <Link to="#">elementum hendrerit</Link> tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </div>

                                        <div className="entry-footer row no-gutters flex-column flex-md-row">
                                            <div className="col-md">
                                                <div className="entry-tags">
                                                    <span>Tags:</span> <Link to="#">photography</Link> <Link to="#">style</Link>
                                                </div>
                                            </div>

                                            <div className="col-md-auto mt-2 mt-md-0">
                                                <div className="social-icons social-icons-color">
                                                    <span className="social-label">Share this post:</span>
                                                    <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                                                    <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                                                    <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                                                    <Link to="#" className="social-icon social-linkedin" title="Linkedin" target="_blank"><i className="icon-linkedin"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="entry-author-details">
                                        <figure className="author-media">
                                            <Link to="#">
                                                <img src={ `${ process.env.PUBLIC_URL }/assets/images/blog/single/author.jpg` } alt="User name"/>
                                            </Link>
                                        </figure>

                                        <div className="author-body">
                                            <div className="author-header row no-gutters flex-column flex-md-row">
                                                <div className="col">
                                                    <h4><Link to="#">John Doe</Link></h4>
                                                </div>
                                                {
                                                    isIEBrowser() ? 
                                                        <div className="mb-1"></div>
                                                    : ""
                                                }
                                                <div className="col-auto mt-1 mt-md-0">
                                                    <Link to="#" className="author-link">View all posts by John Doe <i className="icon-long-arrow-right"></i></Link>
                                                </div>
                                            </div>

                                            <div className="author-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <nav className="pager-nav" aria-label="Page navigation" style={ isIEBrowser() ? { flexFlow: 'wrap'} : {} }>
                                    <Link className="pager-link pager-link-prev" to={ `${process.env.PUBLIC_URL}/blog/single/${parseInt(postId)-1}`} aria-label="Previous" tabIndex="-1">
                                        Previous Post
                                        <span className="pager-link-title">Cras iaculis ultricies nulla</span>
                                    </Link>

                                    <Link className="pager-link pager-link-next" to={ `${process.env.PUBLIC_URL}/blog/single/${parseInt(postId)+1}`} aria-label="Next" tabIndex="-1">
                                        Next Post
                                        <span className="pager-link-title">Praesent placerat risus</span>
                                    </Link>
                                </nav>

                                <RelatedPosts posts={ relatedPosts} slider={ mainSlider1} />
                                <Comments />
                                <Reply />
                            </div>

                            <aside className="col-lg-3">
                                <BlogSidebar />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) =>{
    return {
        posts: state.posts.items ? state.posts.items : []
    }
}

export default connect(
	mapStateToProps
)(SingleFullWidthSidebar);