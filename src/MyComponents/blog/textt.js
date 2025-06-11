import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost/ent-react/server-wp/wp-json/wp/v2/posts?_embed")
            .then((response) => {
                setPosts(response.data);
                console.log(posts);
                
            })
            .catch((error) => {
                console.log("Server error:", error);
            });
    }, []);

    return (
        <>


            {posts.length > 0 ? (
                posts.map(post => {
                    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                    return (
                      <div key={post.id}>
                        <h2>{post.title.rendered}</h2>                       
                          <img src={imageUrl} />                       
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                      </div>
                    );
                  })
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default Post;