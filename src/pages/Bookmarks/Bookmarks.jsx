import React, { useEffect, useState } from 'react';
import BlogsCard from '../../Components/BlogsCard';
import { deleteBlog, getSingleBlog } from '../../Utils/Index';
import EmptyState from '../../Components/EmptyState';

const Bookmarks = () => {
    const [blogs, setBlogs]=useState([])
    useEffect(() => {
        const storedBlogs=getSingleBlog()
        setBlogs(storedBlogs)
    },[])

 const  handleDeleteButton =id => {
    deleteBlog(id)
    const storedBlogs=getSingleBlog()
    setBlogs(storedBlogs)
 }
	
 if(blogs.length<1) return <EmptyState  message='No Bookmarks available !!' address={'/blog'} level={'go to Blog'}></EmptyState>

    return (
        <div className=''>
           <div className="grid px-4 sm:px-8 lg:px-12 py-12 md:justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {blogs.map(blog => (
                            <BlogsCard handleDeleteButton={handleDeleteButton} deletable={true} key={blog.id} blog={blog} />
                        ))}
                    </div>
        </div>
    );
};

export default Bookmarks;