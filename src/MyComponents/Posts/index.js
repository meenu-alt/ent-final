import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost/ent-react/server-wp/wp-json/wp/v2/posts")
            .then((response) => {
                setPosts(response.data); // Ensure we set the 'data' property
            })
            .catch((error) => {
                console.log("Server error:", error);
            });
    }, []);

    return (
        <>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <p key={post.id}>{post.title.rendered}</p>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default Post;
