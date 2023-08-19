function Header(blogData){
   
    return (
        <header>
            <h1 name={blogData.name}>{blogData.name}</h1>
        </header>
    )
}
export default Header