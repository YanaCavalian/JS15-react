import { useEffect, useState } from "react";

export const Products = () => {
  const [post, setPost] = useState([]);


    useEffect(()=>{
     fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data.posts)); 
    }, [])
    

  return (
    <>
      <div>
        {post.map((el) => {
          return <p key={el.id}> - {el.title} -</p>;
        })}
      </div>
     
    </>
  );
}

  