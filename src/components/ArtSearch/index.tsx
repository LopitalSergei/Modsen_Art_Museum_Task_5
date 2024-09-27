import { FC, useEffect, useState } from 'react';

import { Container } from '@styles/global';
import search from '@assets/icons/search.svg';
import { ArtsList } from '@components/ArtsList';
import { useDebounce } from '@hooks/useDebounce';
import { EmptySearch } from '@components/EmptySearch';
import { ArtInfo, PaginationInfo } from 'types/artInterfaces';

import * as S from './styled';
import { dataFetch } from '@utils/dataFetch';

export const ArtSearch: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue);

  const [arts, setArts] = useState<ArtInfo[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>();
  const [page, setPage] = useState(1);
  const [isSuccessSearch, setIsSuccessSearch] = useState(true);
  const [sort, setSort] = useState('');
  const paginationPages = [
    <S.ActivePageCounter onClick={() => handlePageClick(page)}>
      {page}
    </S.ActivePageCounter>,
  ];

  const url = `https://api.artic.edu/api/v1/artworks/search?q=${debouncedInputValue}&fields=id,title,image_id,artist_title,is_public_domain&page=${page}&limit=3&sort=${sort}`;

  useEffect(() => {
    dataFetch(url).then((res) => {
      if (res.data.length !== 0) {
        setArts(res.data);
        setPaginationInfo(res.pagination);
        setIsSuccessSearch(true);
      } else {
        handlePrevPageClick();
        setIsSuccessSearch(false);
      }
    });
  }, [debouncedInputValue, page, sort]);

  const handleNextPageClick = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPageClick = () => {
    setPage((prev) => (prev - 1 <= 1 ? 1 : prev - 1));
  };

  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setInputValue(() => {
      setPage(1);
      return value;
    });
  };

  if (paginationInfo) {
    if (paginationInfo.total_pages - page < 4) {
      for (let i = 1; i < paginationInfo.total_pages - page + 1; i++) {
        paginationPages.push(
          <S.PageCounter onClick={() => handlePageClick(page + i)}>
            {page + i}
          </S.PageCounter>
        );
      }
    } else {
      for (let i = 1; i < 4; i++) {
        paginationPages.push(
          <S.PageCounter onClick={() => handlePageClick(page + i)}>
            {page + i}
          </S.PageCounter>
        );
      }
    }
  }

  const sorting = () => {
    setSort(sort ? '' : 'id');
  };

  return (
    <Container>
      <form>
        <S.SearchContainer>
          <S.SearchBarBlock>
            <S.SearchInput
              id="value"
              placeholder="Search art, artist, work...."
              value={inputValue}
              onChange={onChange}
            />
            <S.SearchIcon src={search} alt="search" />
          </S.SearchBarBlock>
        </S.SearchContainer>
      </form>

      {isSuccessSearch ? (
        <>
          <S.SortButton onClick={sorting}></S.SortButton>
          <ArtsList arts={arts} />
          <S.Pagination>
            <S.ButtonLeft onClick={handlePrevPageClick}></S.ButtonLeft>
            {paginationPages.map((item) => item)}
            <S.ButtonRight onClick={handleNextPageClick}></S.ButtonRight>
          </S.Pagination>
        </>
      ) : (
        <EmptySearch />
      )}
    </Container>
  );
};
