import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AllBlogs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 9;

    const getQueryParam = (param) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(param);
    };

    const page = parseInt(getQueryParam("page")) || 1;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `https://blogs.entdelhi.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`
                );
                setPosts(response.data);
                setTotalPages(parseInt(response.headers["x-wp-totalpages"]));
            } catch (err) {
                setError("Failed to fetch posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [page]);

    const changePage = (newPage) => {
        navigate(`?page=${newPage}`);
        window.scrollTo(0, 0);
    };

    // Navigate using slug instead of ID
    const bloglistener = (slug) => {
        navigate(`/blog/${slug}`);
    };

    return (
        <div>
            <style>
                {`
                .allblog {
                    max-width: 1200px;
                    margin: 40px auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                }
                .blog-card {
                    background: white;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    cursor: pointer;
                }
                .blog-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 5px;
                }
                .blog-card h2 {
                    font-size: 20px;
                    color: #333;
                    margin: 10px 0;
                }
                .blog-card p {
                    font-size: 16px;
                    color: #555;
                }
                .pagination {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                .pagination button {
                    margin: 5px;
                    padding: 10px 15px;
                    border: none;
                    background-color: #007bff;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .pagination button:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }
                .paragraphblog {
                    display: none !important;
                }
                `}
            </style>

            <div className="allblog container">
                <h1 className="text-center">Blogs</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <div className="blog-grid">
                    {posts.length > 0 && posts.map((post) => {
                        const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                        return (
                            <div key={post.id} className="blog-card" onClick={() => bloglistener(post.slug)}>
                                {imageUrl && <img src={imageUrl} alt={post.title.rendered} />}
                                <h2>{post.title.rendered}</h2>
                                <div className="paragraphblog" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </div>
                        );
                    })}
                </div>

                <div className="pagination">
                    <button onClick={() => changePage(page - 1)} disabled={page <= 1}>Previous</button>
                    <span> Page {page} of {totalPages} </span>
                    <button onClick={() => changePage(page + 1)} disabled={page >= totalPages}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;
