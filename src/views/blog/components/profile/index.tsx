import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ForwardLink } from '../../../../components/forward-link';
import * as S from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';
import { Spinner } from '../../../../components/spinner';

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileProps {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  const [loading, setLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfile(response.data);
    } finally {
      setLoading(false);
    }
  }, [profile]);

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <S.ProfileContainer>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <S.ProfilePicture src={profile.avatar_url} />
          <S.ProfileInfo>
            <header>
              <h1>{profile.name}</h1>
              <ForwardLink
                text='github'
                href={profile.html_url}
                target='_blank'
              />
            </header>
            <p>{profile.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profile.login}
              </li>
              {profile?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profile.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile.followers} seguidores
              </li>
            </ul>
          </S.ProfileInfo>
        </>
      )}
    </S.ProfileContainer>
  );
}
