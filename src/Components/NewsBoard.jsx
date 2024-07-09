import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    },[category])

  return (
    <div>
        <h2 className="text-center mt-2">
            Latest News from United States
        </h2>
        <div className="row">
            {articles.map((news,index) => {
                if(news.title !== null && 
                   news.description !== null && 
                   news.urlToImage !== null && 
                   news.url !== null && 
                   news.title !== '[Removed]'
                ) {
                    return (
                        <NewsItem 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url}
                        />
                    )
                }
            })}
        </div>
    </div>
  )
}

export default NewsBoard