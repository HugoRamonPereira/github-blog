import * as S from './styles';

export function SearchField() {
  return (
    <S.SearchFieldContainer>
      <header>
        <h3>Publications</h3>
        <span>6 publications</span>
      </header>
      <input type='text' placeholder='Buscar repos' />
    </S.SearchFieldContainer>
  );
}
