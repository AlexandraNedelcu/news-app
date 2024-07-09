const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
        <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{width:'80%',height:'28rem'}}>
            <img src={src} style={{height:'50%',width:'100%'}} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title.length > 60 ? `${title.slice(0,60)}...` : title}</h5>
                <p className="card-text">{description.length > 100 ? `${description.slice(0,100)}...` : description}</p>
                <a href={url} target="_blank" className="btn btn-danger w-100">Read Full Article</a>
            </div>
        </div>
    </div>
  )
}

export default NewsItem