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
import { BlogPostProps } from '../../../blog';
import { Spinner } from '../../../../components/spinner';
import { dateFormatter } from '../../../../utils/dateFormatter';

interface PostHeaderProps {
  postInfo: BlogPostProps;
  loading: boolean;
}

export function PostHeader({ postInfo, loading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <S.PostHeader>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ForwardLink
              as='button'
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text='Voltar'
              variant='iconLeft'
              onClick={goBack}
            />
            <ForwardLink
              text='Ver no Github'
              href={postInfo.html_url}
              target='_blank'
            />
          </header>

          <h1>{postInfo.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postInfo.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {dateFormatter(postInfo?.created_at)}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postInfo.comments} comentários
            </li>
          </ul>
        </>
      )}
    </S.PostHeader>
  );
}
