import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import "./styles.css";
import wordsToNumbers from 'words-to-numbers';

const alanKey = '6f8f4612be1e0712352b5e370b6186712e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            // onCommand: (commandData) => {
            //     if (commandData.command === 'newHeadlines') {
            //         // if command is testCommand then we want this block of code to be executed
            //         // alert('this code was executed');
            //         console.log(commandData.articles);
            //         setNewsArticles(commandData.articles);
            //         setActiveArticle(-1);
            //     } else if (commandData.command === 'highlight') {
            //         setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            //     }
            // }
            onCommand: ({command, articles, number}) => {
                if (command === 'newHeadlines') {
                    // if command is testCommand then we want this block of code to be executed
                    // alert('this code was executed');
                    console.log(articles);
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
          
                    if (parsedNumber > articles.length) {
                      alanBtn().playText('Please try that again...');
                    } else if (article) {
                      window.open(article.url, '_blank');
                      alanBtn().playText('Opening...');
                    } else {
                      alanBtn().playText('Please try that again...');
                    }
                  }
            }
        })
    }, []);

    return (
        <div>
            <div className="logoContainer">
                <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg" className="alanLogo" alt="alan logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App;