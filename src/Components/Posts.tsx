import { useEffect, useState } from "react";
import Blog from "./Blog";
import { SpinnerLoading } from "./SpinnerLoading";
import { Post } from "./Post";

export const Posts = () => {
    const [blog, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {
        const fetchBlogs = async () => {
            const blogs: Blog[] = [];
            blogs.push({
                id: 1, title: "OOPS Concept", author: "Kalis", date: "22,May,2024",
                description: "In this blog,you will get to know about the concept of classes, Abstraction,Polymorphism,Inheritance"
            ,img:'book1'});
            blogs.push({
                id: 2, title: "MultiThreading", author: "Kalis", date: "24,May,2024",
                description: "In this blog,you will get to know about the concept of thread handling"
                ,img:'book2'});
            blogs.push({
                id: 3, title: "Concurency Control", author: "Kalis", date: "21,July,2024",
                description: "In this blog,you will get to know about the Concurency Control"
            ,img:'book3'});
            setBlogs(blogs);
            setIsLoading(false);


        };
        fetchBlogs().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);
    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }
    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }
    return (
        <>
            <div className='container mt-5' id='blogs'>
                <div className='homepage-carousel-title'>
                    <h1>Latest Posts</h1>
                </div>
              <br></br>
                    {/* Desktop */}
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                                {
                                    blog.slice(0, 3).map(myBlog => (
                                        <Post content={myBlog} key={myBlog.id} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );

}