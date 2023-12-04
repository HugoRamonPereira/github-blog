import { BlogPostProps } from '../..';
import { dateFormatter } from '../../../../utils/dateFormatter';
import * as S from './styles';

interface PostProps {
  post: BlogPostProps;
}

export function Post({ post }: PostProps) {
  return (
    <S.PostContainer to={`${post.url}`} target='_blank'>
      <div>
        <strong>{post.title}</strong>
        <span>{dateFormatter(post.created_at)}</span>
      </div>
      <p>{post.description}</p>
    </S.PostContainer>
  );
}
