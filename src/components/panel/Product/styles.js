import styled from "styled-components";
import { GiFlame, GiShoppingCart, GiInfo } from 'react-icons/gi';

export const Container = styled.div`

    border-radius:5px;
    margin:5px;
    background:rgba(255,255,255,0.2);
    padding:5px;
    flex:1;
    
    h1{
      font-family:arial;
      font-size:15px;
      text-transform:uppercase;
      margin-top:5px;
      font-weigth: bold;
    }

    p{
          text-align:justify;
          padding:5px;
    }
    .col{
      text-align:left;
    }

    button{
          margin-bottom:5px;
          margin-right:5px;
          text-align:center;
    }

    .buttonset{
          text-align:right;
    }

`;

export const ProductIcon = styled(GiFlame)`
      width:20px;
      height:20px;
      flex-shrink:0;
      margin:0px 10px;
`;

export const PurchaseIcon = styled(GiShoppingCart)`
      width:20px;
      height:20px;
      flex-shrink:0;
      margin-right:5px;
`;

export const InfoIcon = styled(GiInfo)`
      width:20px;
      height:20px;
      flex-shrink:0;
      margin-right:5px;
`;