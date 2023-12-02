import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ForwardLink } from '../../../../components/forward-link';
import * as S from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export function PostHeader() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <S.PostHeader>
      <header>
        <ForwardLink
          as='button'
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text='Voltar'
          variant='iconLeft'
          onClick={goBack}
        />
        <ForwardLink text='Ver no Github' href='#' target='_blank' />
      </header>

      <h1>Javascript and C#: the similarities</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          hramonp-dev
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </S.PostHeader>
  );
}
