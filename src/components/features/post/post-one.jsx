import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostOne extends Component {

    render() {
        const { post, bodyClass="text-center", btnText="Continue Reading", adClass="entry-display" } = this.props;

        if (post) {
            let date = new Date( post.date );
            let options = { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" };
            return (
                <article className={ `entry ${adClass}` }>
                    <figure className="entry-media">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>
                            <img src={ process.env.PUBLIC_URL + '/' + post.image[0] } alt="desc" />
                        </Link>
                    </figure>

                    <div className={ `entry-body ${ bodyClass }` }>
                        <div className="entry-meta">
                            <Link to="#">{date.toLocaleDateString('en-US', options) }</Link>, {post.comments} Comments
                        </div>

                        <h3 className="entry-title">
                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>{post.title}</Link>
                        </h3>

                        <div className="entry-content">
                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}`} className="read-more">{ btnText }</Link>
                        </div>
                    </div>
                </article>
            );
        } else
            return ('');
        }
}

export default PostOne;