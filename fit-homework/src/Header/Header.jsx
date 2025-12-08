function Article(props) {
    
    return(
        <article className="article-card">
            <img src="props.imageURL" alt="" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <ul>{
                props.tags.forEach(tag => {
                    <li>{tag}</li>
                })
            }</ul>

            <span></span>
        </article>
    )
}