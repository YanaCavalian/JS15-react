import { useEffect, useState } from "react";

export const Products = () => {
  const [post, setPost] = useState([]);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  useEffect(() => {
    if (post.length === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        });
      }
    }
  }, [post.length])

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
      <h4>
        Latitude: {location.latitude}, longitude: {location.longitude}
      </h4>
    </>
  );
}