import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/posts') // Sử dụng proxy
      .then((res) => {
        if (!res.ok) throw new Error('Phản hồi mạng không ổn');
        return res.json();
      })
      .then((data) => {
        console.log("Dữ liệu bài viết:", data);
        setPosts(data); // Dữ liệu là mảng, không cần data.posts
        setLoading(false);
      })
      .catch((err) => {
        console.error('Lỗi fetch:', err);
        setError('Không thể tải bài viết. Vui lòng thử lại sau.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {posts.length === 0 ? (
        <p>Không có bài viết nào.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Post;