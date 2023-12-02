import { Post } from './components/post';
import { Profile } from './components/profile';
import { SearchField } from './components/search-field';
import { PostsListContainer } from './styles';

export function Blog() {
  return (
    <div>
      <Profile />
      <SearchField />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </div>
  );
}
