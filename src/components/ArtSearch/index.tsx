import { useEffect, useState } from 'react';
import * as S from './styled';

import search from '@assets/icons/search.svg';
import { Container } from '@styles/global';
import { Loader } from '@components/ui/Loader';
import { EmptySearch } from '@components/EmptySearch';
import { ArtsList } from '@components/ArtsList';
import { useDebounce } from '@hooks/useDebounce';
import { ArtInfo } from 'types/artInterfaces';

export const ArtSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue);

  const [arts, setArts] = useState<ArtInfo[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessSearch, setIsSuccessSearch] = useState(true);

  const url = `https://api.artic.edu/api/v1/artworks/search?q=${debouncedInputValue}&fields=id,title,image_id,artist_title,is_public_domain&page=${page}&limit=3`;

  useEffect(() => {
    setIsLoading(true);

    try {
      const dataFetch = async (url: string) => {
        const artData = await fetch(url).then((res) => res.json());
        if (artData.data.length !== 0) {
          setArts(artData.data);
          setIsSuccessSearch(true);
        } else {
          handlePrevPageClick();
          setIsSuccessSearch(false);
        }
      };

      dataFetch(url);
    } catch (err) {
      console.log(err);

      setArts([]);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedInputValue, page]);

  const handleNextPageClick = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPageClick = () => {
    setPage((prev) => (prev - 1 <= 1 ? 1 : prev - 1));
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(() => {
      setPage(1);
      return e.currentTarget.value;
    });
  };

  return (
    <Container>
      <form>
        <S.SearchContainer>
          <S.SearchBarBlock>
            <S.SearchInput
              id="value"
              placeholder="Search art, artist, work...."
              // value={values.value}
              // onChange={handleChange}
              value={inputValue}
              onChange={onChange}
            />
            <S.SearchIcon src={search} alt="search" />
          </S.SearchBarBlock>
        </S.SearchContainer>
      </form>
      {/* {errors.value && <p>{errors.value}</p>} */}

      {isLoading ? (
        <Loader />
      ) : isSuccessSearch ? (
        <>
          <ArtsList arts={arts} />
          <S.Pagination>
            <S.ButtonLeft onClick={handlePrevPageClick}></S.ButtonLeft>
            <S.PageCounter>{page}</S.PageCounter>
            <S.ButtonRight onClick={handleNextPageClick}></S.ButtonRight>
          </S.Pagination>
        </>
      ) : (
        <EmptySearch />
      )}
    </Container>
  );
};
