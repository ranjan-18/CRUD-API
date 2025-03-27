import axios from 'axios'
import React from 'react'

const api=axios.create({
 baseURL: "https://jsonplaceholder.typicode.com"
});
 

export const getPost = ()=>{
   return  api.get("/posts");
}

export const deletePost = (id)=>{
    return  api.delete(`/posts/${id}`);
}
