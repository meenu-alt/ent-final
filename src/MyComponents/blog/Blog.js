import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
    const { slug } = useParams(); // Get slug from URL path
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://blogs.entdelhi.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch post");
                }

                const data = await response.json();

                if (data.length === 0) {
                    throw new Error("Post not found");
                }

                setPost(data[0]); // Use the first post (matched by slug)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return (
        <div>
            <style>
                {`
                .allblog {
                    overflow-wrap: break-word !important;
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                }

                .allblog p {
                    font-size: 16px;
                    color: #555;
                }

                .allblog h2 {
                    font-size: 24px;
                    color: #333;
                    margin-bottom: 15px;
                }

                .allblog div {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #444;
                }

                .allblog p.loading,
                .allblog p.error {
                    font-weight: bold;
                    text-align: center;
                    padding: 10px;
                }

                .allblog p.loading {
                    color: #007bff;
                }

                .allblog p.error {
                    color: #dc3545;
                }

                .allblog img {
                    max-width: 100%;
                    height: auto;
                    max-height: 400px;
                    display: block;
                    margin: 10px auto;
                    border-radius: 5px;
                }
            `}
            </style>

            <div className="allblog container">
                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error">Error: {error}</p>}
                {post && (
                    <div>
                        <h2>{post.title.rendered}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;