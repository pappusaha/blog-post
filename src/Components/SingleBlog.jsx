import React, { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

import { IoBookmarkSharp } from "react-icons/io5";
import { saveSingleBlog } from '../Utils/Index';

const SingleBlog = () => {
    const singleBlog=useLoaderData()
    const [tabindex, setTabIndex]=useState(0)
   

    const {tags ,
        comments_count, 
        reading_time_minutes,
        title,
         public_reactions_count,
          published_at}
          =singleBlog

const  handleBookmarks=singleBlog => {
   saveSingleBlog(singleBlog)
}

    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8  text-black">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{singleBlog.title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full bg-gray-500 border-gray-700" />
                        <p className="text-sm">{reading_time_minutes} min • {published_at}</p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count}  Comments  • {public_reactions_count} views</p> 
                </div>
            </div>
           
        </article>
        
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-800 dark:text-white">
	<Link //to={'/'}
    onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600 ${ tabindex===0 ? 'border border-b-0': 'border-b'}`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span>
	</Link>
	<Link  to={'author'}
    onClick={() => setTabIndex(1)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900  ${tabindex ===1 ? 'border border-b-0': 'border-b'}`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Author</span>
	</Link>
	{/* this is book mark button  */}
<div onClick={() => handleBookmarks(singleBlog)} className="flex items-center ml-2 bg-slate-300 rounded-full p-3 hover:opacity-55 bg-opacity-20 hover:scale-125 overflow-hidden">

<IoBookmarkSharp  className="w-7 h-6 text-amber-900   " />

</div>

</div>

<Outlet></Outlet> 

      
    </div>
    );
};

export default SingleBlog;