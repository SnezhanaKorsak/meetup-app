import styled from 'styled-components';
import imgPath from 'assets/images/nophoto-products.jpeg';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces[10]}px;
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spaces[2]}px 0;
  margin-bottom: ${({ theme }) => theme.spaces[3]}px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.div<{ img: string }>`
  width: ${({ theme }) => theme.spaces[12]}px;
  height: ${({ theme }) => theme.spaces[10]}px;
  margin-right: ${({ theme }) => theme.spaces[3]}px;
  background-image: url(${(props) => props.img || imgPath});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
`;

export const Time = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces[4]}px;
  text-align: right;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: ${({ theme }) => theme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 600;
`;

export const Title = styled.p`
  width: 100%;
  height: ${({ theme }) => theme.spaces[4]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  line-height: ${({ theme }) => theme.spaces[4]}px;
`;

export const Description = styled.p`
  width: 100%;
  height: ${({ theme }) => theme.spaces[4]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: ${({ theme }) => theme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Place = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces[4]}px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: ${({ theme }) => theme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 600;
`;
