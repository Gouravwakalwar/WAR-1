import React from 'react';
import {Article }from '../../components';
import{blog01,blog02,blog03,blog04,blog05 } from './imports'
import './blog.css'; 

const Blog =() => {
  return (
      <div className='war1__blog section__padding' id='blog'>
        <div className='war1__blog-heading'>
          <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
        </div>
         <div className="war1__blog-container">
          <div className="war1__blog-container_groupA">
           <Article imgUrl={blog01} date='june 21, 2024' title='WAR-1 and OpenAI is the future, Let us explore how it is?'/>
          </div>
          <div className="war1__blog-container_groupB">
           <Article imgUrl={blog02} date='june 21, 2024' title='WAR-1 and OpenAI is the future, Let us explore how it is?'/>
           <Article imgUrl={blog03} date='june 21, 2024' title='WAR-1 and OpenAI is the future, Let us explore how it is?'/>
           <Article imgUrl={blog04} date='june 21, 2024' title='WAR-1 and OpenAI is the future, Let us explore how it is?'/>
           <Article imgUrl={blog05} date='june 21, 2024' title='WAR-1 and OpenAI is the future, Let us explore how it is?'/>
          </div>
          </div> 

      </div>
  )
}

export default Blog;