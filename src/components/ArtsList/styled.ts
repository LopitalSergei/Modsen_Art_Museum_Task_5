import styled from 'styled-components';

export const ArtRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;
  margin: 40px 0 24px;
  padding-bottom: 66px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 85px;
  }
`;
