import React from 'react';
import { useLoaderData } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const Content = () => {
    const content=useLoaderData()
    const {id,title,description,readable_publish_date,cover_image,tags, body_html}=content
    
    return (
        <div 
        className=" mx-auto group   transition border-2  p-2  border-opacity-30     hover:no-underline focus:no-underline ">
        <img role="presentation" className="object-cover w-full  rounded h-full bg-gray-500" src={cover_image || placeholderImage} />
        <div>
            <div className="flex justify-center flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
              {
tags.map( tag => (
    <a  className="px-3 py-1 rounded-sm hover:underline font-bold text-gray-900">#{tag}</a>
))
              }
              
               
            </div>
            
        </div>
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
  <Markdown rehypePlugins={[rehypeRaw]}> 
    {body_html}
     </Markdown> 
        {/*  */}
        </div>
    </div>
    );
};

export default Content;