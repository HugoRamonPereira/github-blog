import styled from 'styled-components';

export const SearchFieldContainer = styled.form`
  width: 100%;
  margin-bottom: 2rem;
  transform: translateY(-1rem);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
      font-size: ${({ theme }) => theme.textSizes.titleS};
      color: ${({ theme }) => theme.colors.baseSubtitle};
    }

    span {
      font-size: ${({ theme }) => theme.textSizes.titleS};
      color: ${({ theme }) => theme.colors.baseSpan};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.baseInput};
    border: 1px solid ${({ theme }) => theme.colors.baseBorder};
    color: ${({ theme }) => theme.colors.baseText};
    transition: 0.3s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  }
`;
