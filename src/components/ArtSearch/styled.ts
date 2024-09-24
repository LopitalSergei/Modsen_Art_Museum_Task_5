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

export const SortButton = styled.div`
  cursor: pointer;
  height: ${({ theme }) => theme.sizes.iconMiniSize};
  width: ${({ theme }) => theme.sizes.iconMiniSize};
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2238 6.69602 15.3797 6.70858 15.5393C6.72305 15.7232 6.93724 15.9374 7.36561 16.3657L11.4342 20.4344C11.6323 20.6324 11.7313 20.7314 11.8454 20.7685C11.9458 20.8011 12.054 20.8011 12.1544 20.7685C12.2686 20.7314 12.3676 20.6324 12.5656 20.4344L16.6342 16.3657C17.0626 15.9374 17.2768 15.7232 17.2913 15.5393C17.3038 15.3797 17.2392 15.2238 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
    no-repeat center;
`;
