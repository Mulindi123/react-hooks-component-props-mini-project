function Article({post}){
    return (
        <article >
            <h3 title={post.title} > {post.title}</h3>
            <small date= {post.date} placeholder= "January 1, 1970" > {post.date}</small>
            <p preview={post.preview} > {post.preview}</p>

        </article>
    )
}
export default Article