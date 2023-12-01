import { Outlet } from 'react-router-dom';
import * as S from './styles';

export function MainLayout() {
  return (
    <S.LayoutContainer>
      <Outlet />
    </S.LayoutContainer>
  );
}
