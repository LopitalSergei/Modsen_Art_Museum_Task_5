import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.sizes.margin2x};
  padding-bottom: ${({ theme }) => theme.sizes.margin2x};
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: initial;
  padding: ${({ theme }) => theme.sizes.marginMini};
  font-size: ${({ theme }) => theme.fontSize.mini};
`;

export const SearchBarBlock = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #e0e0e0;
  padding: ${({ theme }) => theme.sizes.marginMini};
  border-radius: ${({ theme }) => theme.sizes.marginDefault};
`;

export const SearchIcon = styled.img`
  height: ${({ theme }) => theme.fontSize.subTitle};
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.margin2x};
  gap: ${({ theme }) => theme.sizes.marginMini};
`;

export const ButtonLeft = styled.div`
  height: ${({ theme }) => theme.sizes.iconMiniSize};
  width: ${({ theme }) => theme.sizes.iconMiniSize};
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' class='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z' fill='%23000000'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;

  &:hover {
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' class='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z' fill='%23F17900'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
      no-repeat center;
  }
`;

export const ButtonRight = styled.div`
  height: ${({ theme }) => theme.sizes.iconMiniSize};
  width: ${({ theme }) => theme.sizes.iconMiniSize};
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' class='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z' fill='%23000000'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;

  &:hover {
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' class='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z' fill='%23F17900'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
      no-repeat center;
  }
`;

export const PageCounter = styled.div`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: ${({ theme }) => theme.colors.favoriteMark};
  padding: ${({ theme }) => theme.sizes.marginMini};
  border-radius: ${({ theme }) => theme.sizes.marginMini};
`;

export const ActivePageCounter = styled(PageCounter)`
  background: ${({ theme }) => theme.colors.mainAccent};
  color: ${({ theme }) => theme.colors.whiteText};
`;
