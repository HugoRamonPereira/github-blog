import { ComponentProps, ElementType, ReactNode } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ForwarLinkProps
  extends ComponentProps<typeof S.ForwardLinkContainer> {
  text: string;
  icon?: ReactNode;
  variant?: 'iconLeft';
  as?: ElementType;
}

export function ForwardLink({ text, icon, as, ...props }: ForwarLinkProps) {
  return (
    <S.ForwardLinkContainer {...props}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </S.ForwardLinkContainer>
  );
}
