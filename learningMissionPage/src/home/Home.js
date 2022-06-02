import React from "react";
import Courses from '../homePage/courses/Courses'
import Footer from '../homePage/footer/Footer'
import Layout from '../homePage/layout/Layout'
import Main from '../homePage/main/Main'


const Home = () => {
  return (
    <div>
      <Layout />
      <Main />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;