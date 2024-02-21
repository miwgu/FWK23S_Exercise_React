import React from 'react';

const Props_bloglist = ({ blogsArray, test }) => {

  return (
    <div>
      {test}
      <br />
      <hr />
      {blogsArray.map((blogItem, index) => (
        <div key={index}>
          <p>ID: {index}</p> 
          <p>Title: {blogItem.title}</p>
          <p>Body: {blogItem.body}</p>
          <p>Author: {blogItem.auther}</p> {/* It seems like you have a typo here, it should be "author" instead of "auther" */}
          
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Props_bloglist;