import styled from 'styled-components';
import imgPath from 'assets/images/nophoto-products.jpeg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.spaces[10]}px;
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spaces[6]}px;
`;

export const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces[10]}px;
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

export const HiddenButton = styled.button<{ hidden: boolean }>`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.spaces[1]}px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: none;
  outline: none;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

export const NavLink = styled(Link)<{ isActive?: boolean }>`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  color: ${({ theme }) => theme.colors.white};
`;
