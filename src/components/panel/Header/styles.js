import styled from "styled-components";
import { FcAbout } from 'react-icons/fc';

export const Container = styled.div`
    width:100%;
    height:90px;

    background:rgba(255,255,255,0.2);
    display:flex;
    padding:0 16px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    display:
    justfy-content:space-between;
    align-itens:center;
    

`;

export const TopLogo = styled.img`
  height:80px;
  padding: 0 15px;
`;


export const SearchInput = styled.input`
  width:100%;
  border-radius:4px;
  border:1px #fff;
  height:40px;
  margin-left:16px;
  margin-top:20px;
  padding:0 15px;
  font-size:15px;
  font-weight:bold;
`;

export const MessageIcon = styled(FcAbout)`
      width:40px;
      height:40px;
      margin-left:15px;
      flex-shrink:0;
      margin-top:20px;
`;