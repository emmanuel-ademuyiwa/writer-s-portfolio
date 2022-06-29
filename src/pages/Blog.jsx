import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="blog">
        <div className="description">
          <p></p>
        </div>
        <div className="cardList">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
