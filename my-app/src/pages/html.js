import Nav_bar from "../components/header";
import Footer from "../components/footer"
import Main from "../components/main";

import { Link,NavLink } from "react-router-dom";

import React from 'react';

const Html = () => {
  return (
    <>
    <Nav_bar/>
    <Main pageName="html"></Main>
    <Footer/>
    </>
  );
}

export default Html;
