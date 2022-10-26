import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (item) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);

    const updateNews= async() => {
        document.title = `Update Yourself | ${item.category[0].toUpperCase()+item.category.slice(1)}`;
        const url = `https://newsapi.org/v2/top-headlines?in&category=${item.category}&apiKey=${item.apikey}&page=${page}&pageSize=${item.pageSize}`;
        item.setProgress(20);
        let data = await fetch(url);
        item.setProgress(50);
        let parsedData = await data.json();
        item.setProgress(70);
        setArticles(parsedData.articles);
        setTotalArticles(parsedData.totalResults);
        setLoading(false);
        item.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, []);
    
    const fetchMoreData = async () =>{
        const url = `https://newsapi.org/v2/top-headlines?in&category=${item.category}&apiKey=${item.apikey}&page=${page+1}&pageSize=${item.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalArticles(parsedData.totalResults);
    }

        return (
            <div className="container my-3">
                <h2> {item.category[0].toUpperCase() + item.category.slice(1)} - Top Trending</h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalArticles}
        
                >
                    <div className="row container">
                        {
                        articles.map((element) => {
                                return <div key={element.url}>
                                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })
                        }
                    </div>
                </InfiniteScroll >
            </div>
        )
    
}

News.defaultitem = {
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
