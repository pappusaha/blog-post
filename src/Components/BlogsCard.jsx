import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
import { MdDelete } from "react-icons/md";
import { deleteBlog } from '../Utils/Index';


const BlogsCard = ({blog,deletable, handleDeleteButton}) => {
    const {id,title,description,readable_publish_date,cover_image,}=blog



    return (
        <div className='relative p-1 border-2 rounded-lg hover:scale-105 '> 
            	<Link to={`/blog/${id}`} 
                className="max-w-sm mx-auto group   transition    border-primary   hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src={cover_image || placeholderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400">{readable_publish_date}</span>
					<p>{description}</p>
				</div>
			</Link>

        { deletable && (<div onClick={() =>handleDeleteButton(id)} className='absolute bg-green-500 p-3 -top-5 -right-5 rounded-full'><MdDelete size={20}  className='text-white group-hover:text-primary'/>
			</div>)}
		</div>
    );
};

export default BlogsCard;