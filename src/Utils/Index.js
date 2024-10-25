
import toast from "react-hot-toast";

// Get the list of blogs from localStorage
export const getSingleBlog = () => {
    let singleBlogs = []; // Stores the list of bookmarked blogs
    const storedBlogs = localStorage.getItem('blog');
    
    if (storedBlogs) {
        singleBlogs = JSON.parse(storedBlogs);
    }
    
    return singleBlogs; // Return the stored list of blogs
}

// Function to save the current blog to bookmarks
export const saveSingleBlog = (singleBlog) => {
    const singleBlogs = getSingleBlog(); // Get the existing list of blogs
    const isExist = singleBlogs.find(blog => blog.id === singleBlog.id); // Check if the blog is already bookmarked
    
    if (isExist) {
        return toast.error('Hey User, this blog is already bookmarked!');
    } else {
        singleBlogs.push(singleBlog); // Add the new blog to the list
        localStorage.setItem('blog', JSON.stringify(singleBlogs)); // Save the updated list to localStorage
        return toast.success('Blog bookmarked successfully!');
    }
}

// Function to delete a blog from bookmarks (not directly related to your issue but keeping it here for context)
export const deleteBlog = (id) => {
    let singleBlogs = getSingleBlog();
    const remainingBlogs = singleBlogs.filter(blog => blog.id !== id);
    localStorage.setItem('blog', JSON.stringify(remainingBlogs));
    toast.success('Blog removed from bookmarks!');
}









































// import toast from "react-hot-toast"


// export const getSingleBlog=() => {
//     let singleBlog=[] 
//     const storedBlog=localStorage.getItem('blog')
//     if(storedBlog){
//         singleBlog= JSON.parse(storedBlog)
//     }
// return []

// }


// // this is save Function 

// export const saveSingleBlog=singleBlog => {
//     const singleBlogs=getSingleBlog()
//     const isExist=singleBlog.find(blog => blog.id === singleBlog.id )
//     if(isExist){
//         return toast.error('Hey User already Bookmarked')
//     }
//     else{

    
//         singleBlogs.push(singleBlog)
//         localStorage.setItem('blog', JSON.stringify('blog'))

//         return toast.success('Blog bookmarked Successfully')
//     }

// }



// export const  deleteBlog=id => {
// let  singleBlogs=getSingleBlog()
// const remaning=singleBlogs.filter(remain=> remain.id !==id)
// localStorage.setItem('blog', JSON.stringify(remaning)) 
// toast.success('Blog removed from Bookmark')

// }

