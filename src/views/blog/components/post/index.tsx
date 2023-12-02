import * as S from './styles';

export function Post() {
  return (
    <S.PostContainer to='/post/1'>
      <div>
        <strong>React and Next.js Server Components</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A harum vero
        impedit ad eveniet sit magni aliquam odio dicta hic alias libero facere
        vel incidunt deleniti beatae neque non eligendi saepe, molestias odit
        quasi! Aperiam assumenda sit dignissimos facere exercitationem.
      </p>
    </S.PostContainer>
  );
}
