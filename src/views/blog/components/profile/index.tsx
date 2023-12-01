import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ForwardLink } from '../../../../components/forward-link';
import * as S from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function Profile() {
  return (
    <S.ProfileContainer>
      <S.ProfilePicture src='https://github.com/HugoRamonPereira.png' />
      <S.ProfileInfo>
        <header>
          <h1>Hugo Ramon</h1>
          <ForwardLink text='github' href='#' />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam et
          nam officia ullam cumque fugit, repellat maiores labore! Temporibus.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            HugoRamonPereira
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            HRP Dev Solutions
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            26 seguidores
          </li>
        </ul>
      </S.ProfileInfo>
    </S.ProfileContainer>
  );
}
