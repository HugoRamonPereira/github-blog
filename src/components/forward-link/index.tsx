import { ComponentProps } from 'react';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ForwarLinkProps
  extends ComponentProps<typeof S.ForwardLinkContainer> {
  text: string;
}

export function ForwardLink({ text, ...props }: ForwarLinkProps) {
  return (
    <S.ForwardLinkContainer {...props}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </S.ForwardLinkContainer>
  );
}
