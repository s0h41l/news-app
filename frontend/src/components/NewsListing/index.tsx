import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import NewsCard from "../NewsCard";
import { Article } from "../../interfaces";
import { getNews } from "../../services/news";
import { AppContext } from "../../context/app-context";

interface props {
  articleType: string;
}

const NewsListing = ({ articleType }: props) => {
  const [articles, setArticles] = useState([]);

  const { setLoading, language }: any = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    getNews(language, articleType)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
      });
  }, [language, articleType]);

  return (
    <Grid container spacing={2}>
      {articles.map((article: Article, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <NewsCard {...article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsListing;
