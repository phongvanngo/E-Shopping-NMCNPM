import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import custom component
import PostTwo from '../../features/post/post-two.jsx';
import OwlCarousel from '../../features/owl-carousel';

import { blogSlider } from './settings';

class PostGroup extends Component {
    render() {
        const posts = this.props.posts.slice(0, 3)

        return (
            <div className="blog-posts pt-7 pb-7" style={ {backgroundColor: '#fafafa'} }>
                <div className="container">
                    <h2 className="title-lg text-center mb-3 mb-md-4">From Our Blog</h2>
                    <OwlCarousel  adClass="owl-simple carousel-with-shadow" carouselOptions={ blogSlider  }>
                        {posts.map((item, index) =>
                            <PostTwo post={ item }key={ index} adClass="entry-display" bodyClass="pb-4 text-center"/>
                        ) }
                    </OwlCarousel>

                    <div className="more-container text-center mb-0 mt-3">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/classic`} className="btn btn-outline-darker btn-more"><span>View more articles</span><i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div> 
            </div>     
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.items ? state.posts.items : []
    }
}

export default connect( mapStateToProps ) ( PostGroup );