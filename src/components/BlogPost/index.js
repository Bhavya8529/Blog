import React,{useState,useEffect}from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../Data/blog.json';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  const[post,setPost]=useState({});
  const[postId,setPostId]=useState('');

useEffect(()=>{
  const postId=props.match.params.postId;
  const post=blogPost.data.find(post=>post.id==postId);
  setPost(post);
  setPostId(postId)
},[post,props.match.params.postId]);
  
  return(
     <div className="blogPostContainer">
              <Card>
                <div className="blogHeader">
                <span className="blogCategory">Featured</span>
               <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">posted on 15 july </span>
              </div>
              <div className="postImageContainer">
                <img src="https://images.unsplash.com/photo-1522277245807-5e608aa8adcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"alt="postImage"/>

              </div>
              <div>
                <h3>Post Title</h3>
                <p>lorem ipsum</p>
              </div>
              </Card>
           </div>
        
    
   )

 }

export default BlogPost