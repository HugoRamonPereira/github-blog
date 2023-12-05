import { useCallback, useEffect, useState } from 'react';
import { PostHeader } from './components/post-header';
import { BlogPostProps } from '../blog';
import { api } from '../../lib/axios';
import { useParams } from 'react-router';
import { PostContent } from './components/post-content';

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postInfo, setPostInfo] = useState<BlogPostProps>({} as BlogPostProps);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getPostInfo = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`
      );
      setPostInfo(response.data);
    } finally {
      setLoading(false);
    }
  }, [postInfo]);

  useEffect(() => {
    getPostInfo();
  }, []);

  return (
    <>
      <PostHeader postInfo={postInfo} loading={loading} />
      {!loading && <PostContent content={postInfo.body} />}
    </>
  );
}
