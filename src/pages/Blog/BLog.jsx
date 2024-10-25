import React, { useEffect, useState } from 'react';
import BlogsCard from '../../Components/BlogsCard';
import { useNavigation } from 'react-router-dom';
import Loader from '../../Components/loader';

const BLog = () => {
    const [blogs, setBlogs] = useState([]);
    const navigation =useNavigation()


    useEffect(() => {
        fetch('https://dev.to/api/articles?per_page=300&top=7') 
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
if(navigation.state==='loading') return <Loader></Loader>
    return (
        <> 
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    {blogs.length > 0 && (
                        <a 
                            rel="noopener noreferrer" 
                            href="#" 
                            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
                        >
                            {/** blogs array থেকে প্রথম ব্লগ ডেস্ট্রাকচারিং করে */}
                            {blogs.map(({ cover_image, title, published_at, description }, index) => 
                                index === 0 && (
                                    <>
                                        <img 
                                            src={cover_image} 
                                            alt={title} 
                                            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" 
                                        />
                                        <div className="p-6 space-y-2 lg:col-span-5">
                                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                                {title}
                                            </h3>
                                            <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                                            <p>{description}</p>
                                        </div>
                                    </>
                                )
                            )}
                        </a>
                    )}

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.slice(2,299).map(blog => (
                            <BlogsCard key={blog.id} blog={blog} />
                        ))}               
                    </div>

                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">Load more posts...</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BLog;











