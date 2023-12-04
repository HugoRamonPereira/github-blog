import { useForm } from 'react-hook-form';
import * as S from './styles';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFieldSchema = z.object({
  searchTerm: z.string()
});

type SeachFieldForm = z.infer<typeof searchFieldSchema>;

interface SearchFieldProps {
  postsLength: number;
  getPosts: (searchTerm: string) => Promise<void>;
}

export function SearchField({ getPosts, postsLength }: SearchFieldProps) {
  const { register, handleSubmit } = useForm<SeachFieldForm>({
    resolver: zodResolver(searchFieldSchema)
  });

  async function handleSearchField(data: SeachFieldForm) {
    await getPosts(data.searchTerm);
  }

  return (
    <S.SearchFieldContainer onSubmit={handleSubmit(handleSearchField)}>
      <header>
        <h3>Publications</h3>
        <span>{postsLength} publications</span>
      </header>
      <input
        type='text'
        placeholder='Buscar repos'
        {...register('searchTerm')}
      />
    </S.SearchFieldContainer>
  );
}
