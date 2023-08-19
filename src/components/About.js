function About(blogData){

    return (
        <aside>
            <img src={blogData.image} alt="blog logo" placeholder="https://via.placeholder.com/215" />
            <p about={blogData.about}>{blogData.about}</p>
        </aside>
    )
}

export default About