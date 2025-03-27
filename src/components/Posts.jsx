import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi';
import "../App.css"
 
const Posts = () => {
    const [data, setData] = useState([]);
    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data) // Log the fetched post data to the console for testing purposes.
      }
    
      useEffect(() => {
     getPostData();
      }, [])

      const handleDeletePost=async(id)=>{
        const res=await deletePost(id);
        try {
            if(res.status ===200)
            {
                const newUpdatedPost = data.filter((currPost) => {
                    return currPost.id !== id;
                })
                setData(newUpdatedPost)
            }
        } catch (error) {
            console.log(error.message);
            
        }
      }
  return (
    <>
    <section>
        
    </section>
    <section className="section-post">
     <ol>
        {
            data.map((currEle)=>{
                const {id,body,title} = currEle;
                return <li key={id}>
                    <p>Title:{title}</p>
                    <p>Body:{body}</p>
                    <button>Edit</button>
                    <button   className="btn-delete" onClick={()=>handleDeletePost(id)}>Delete</button>
                </li>
            })
        }
     </ol>
     </section>
    </>
  )
}

export default Posts