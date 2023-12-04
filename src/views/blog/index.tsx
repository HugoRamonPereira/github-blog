import { useCallback, useEffect, useState } from 'react';
import { Post } from './components/post';
import { Profile } from './components/profile';
import { SearchField } from './components/search-field';
import { PostsListContainer } from './styles';
import { api } from '../../lib/axios';
import { Spinner } from '../../components/spinner';

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

export interface BlogPostProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const numberOfPosts = posts.length;

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${reponame}`
        );

        console.log(response.data.items);
        setPosts(response.data.items);
      } finally {
        setLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Profile />
      <SearchField postsLength={numberOfPosts} getPosts={getPosts} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <PostsListContainer>
            {posts.map(post => (
              <Post key={post.number} post={post} />
            ))}
          </PostsListContainer>
        </>
      )}
    </div>
  );
}
