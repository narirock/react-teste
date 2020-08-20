import React from 'react';
import Header from "../components/panel/Header";
// import { Container } from './styles';

function Template(props) {
    return <>
        <Header />
        {props.children}
        </>;
}

export default Template;