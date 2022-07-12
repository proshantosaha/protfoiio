import React from 'react';
import allBlogs from '../../allBlogs/AllBlogs';
import Title from '../../title/Title'

import './_blogPage.scss';


function BlogPage() {
    return (
        <div>
            <div className="B-title">
                <Title title ={'Block page '} span={'Block page'}/>
            </div>
            
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                            return <div className="blog" key={blog.id}>
                                <div className="blog-content">
                                    <img  className="blog-img" src={blog.image} alt="" />
                                    <a href={blog.link} className="blog-link">
                                        {blog.title}
                                    </a>

                                </div>
                            </div>

                    })
                }
           </div>
        </div>
    )
}

export default BlogPage 

