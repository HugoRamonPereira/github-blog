import { useCallback, useEffect, useState } from 'react';
import { Post } from './components/post';
import { Profile } from './components/profile';
import { SearchField } from './components/search-field';
import { PostsListContainer } from './styles';
import { api } from '../../lib/axios';

const username = import.meta.env.VITE_GITHUB_USERNAME;

export interface BlogPostProps {
  title: string;
  description: string;
  created_at: string;
  id: number;
  url: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/articles?username=${username}`);

      console.log(response.data);
      setPosts(response.data);
    } finally {
      setLoading(true);
    }
  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Profile />
      <SearchField />
      <PostsListContainer>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </PostsListContainer>
    </div>
  );
}
