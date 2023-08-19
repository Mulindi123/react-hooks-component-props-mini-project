import Article from "./Article"

function ArticleList({posts}){
    return(

    <main>
        {posts.map((post)=>{
            return (
                <div key= {post.id} >
                    <Article post={post} />
                </div>
            )
        })}
    </main>
    )
}
export default ArticleList