import * as S from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt='github blog logo' />
    </S.HeaderContainer>
  );
}
