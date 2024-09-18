import { useEffect, useState } from 'react';
import { ArtInfo } from '../../types/ArtInterfaces';
import { ArtsList } from '../ArtsList';
// import { validationInputSchema } from "../../schemas/validationInputSchema";
// import { useFormik } from "formik";
import {
  ButtonLeft,
  ButtonRight,
  PageCounter,
  Pagination,
  SearchBarBlock,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './styled';

import search from '@assets/icons/search.svg';
import { Container } from '@styles/global';
import { Loader } from '@components/Loader';
import { EmptySearch } from '@components/EmptySearch';

// type PaginationProps = {
//   onNextPageClick: () => void;
//   onPrevPageClick: () => void;
//   disable: {
//     left: boolean;
//     right: boolean;
//   };
//   nav?: {
//     current: number;
//     total: number;
//   };
// };

export const ArtSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

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
          console.log('else');
          handlePrevPageClick();
          setIsSuccessSearch(false);
        }
      };
      console.log('fetch ', url);

      dataFetch(url);
    } catch (err) {
      console.log(err);

      setArts([]);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedInputValue, page]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 1000);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  const handleNextPageClick = () => {
    const current = page;
    const next = current + 1;
    setPage(next);
  };

  const handlePrevPageClick = () => {
    const current = page;
    let prev = current - 1;
    if (prev <= 1) {
      prev = 1;
    }
    setPage(prev);
  };

  const onChange = (value: string) => {
    try {
      setInputValue(() => {
        setPage(1);
        return value;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form>
        <SearchContainer>
          <SearchBarBlock>
            <SearchInput
              id="value"
              placeholder="Search art, artist, work...."
              // value={values.value}
              // onChange={handleChange}
              value={inputValue}
              onChange={(event) => onChange(event.target.value)}
            />
            <SearchIcon src={search} alt="search" />
          </SearchBarBlock>
        </SearchContainer>
      </form>
      {/* {errors.value && <p>{errors.value}</p>} */}

      {isLoading ? (
        <Loader />
      ) : isSuccessSearch ? (
        <>
          <ArtsList arts={arts} />
          <Pagination>
            <ButtonLeft onClick={handlePrevPageClick}></ButtonLeft>
            <PageCounter>{page}</PageCounter>
            <ButtonRight onClick={handleNextPageClick}></ButtonRight>
          </Pagination>
        </>
      ) : (
        <EmptySearch />
      )}
    </Container>
  );
};
