import React from "react";
import NewsCard from "../NewsCard/NewsCard.js";
import { Grid, Grow, Typography } from "@mui/material";
// import useStyles from "./styles";
import "./NewsCards.css";

const infoCards = [
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },

  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' }
];


const NewsCards = ({ articles, activeArticle }) => {
  // const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className="container" container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className="infoCard">
              <div className="card1" style={{ backgroundColor: infoCard.color }}>
                <Typography variant="p" component="p">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="p" component="p"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="p" component="p">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }


  // let articlesArray = articles.map((article, index) => {
  //   return (
  //     <Grid item xs={12} sm={6} lg={3} style={{ display: 'flex' }}>
  //       <NewsCard activeArticle={activeArticle} article={article} i={index} />
  //     </Grid>
  //   )
  // });

  return (
    <Grow in>
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {/* {articlesArray} */}
        {articles.map((article, index) => {
          return (
            <Grid item xs={12} sm={6} lg={3} style={{ display: 'flex' }}>
              <NewsCard activeArticle={activeArticle} article={article} i={index} />
            </Grid>
          )
        })} 
      </Grid>
    </Grow>

  );
};

export default NewsCards;