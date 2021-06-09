import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../Data/blog.json'
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    
    const posts=blogPost.data;
    setPosts(posts);
  },posts);

  return(
    <div className="sidebarContainer">
    <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
        <span>About Us</span>
        

      </div>
      <div className="profileImageContainer">
          <img src="https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="img"/>
        <div className="cardBody">
          <p className="personalBio">bdahbcdhsjvchjds hdsvhdsvc hdcdvchabcjchdsc dcbdsbuibcbacvyaucvdycbcabc cdbcgnaua yga</p>

        </div>
        </div>
    </Card>
    <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
        <span>Social Network</span>
        
      </div>
    </Card>
    <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
      <div className="cardHeader">
        <span>Recent Posts</span>
        
      </div>
      <div className="recentPosts">
        {
          posts.map(post=>{
            return(
              <NavLink to={'/post/${post.id}'}>
            <div className="recentPost">
           <h3>{post.blogTitle}</h3>
          <span>{post.postedOn}</span>

        </div>
              </NavLink>
             

            );
          })
        }
        
        
      </div>
    </Card>
    </div>
   )

 }

export default Sidebar