import React from 'react'
import './Booklist.css'


const books = [
{
    img: 'https://m.media-amazon.com/images/I/81iTklmD68L._AC_UL320_.jpg',
    author: 'by Colin Bryar and Bill Carr',
    title : 'Working Backwards: Insights, Stories, and Secrets from Inside Amazon',
}, 
 {
    img: 'https://m.media-amazon.com/images/I/81-349iYbfL._AC_UL320_.jpg',
    author: 'by Delia Owens',
    title : 'Where the Crawdads Sing',
}
]

const Booklist = () => {
    return (
        <section className="booklist">
            <Book img={books[0][0]} 
                title = {books[0][2]} 
                author = {books[0][1]}
                >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Hic vero adipisci cupiditate ea laborum, 
                    repellendus facilis itaque placeat quo iste!
                </p>
            </Book>
            <Book 
                img={books[1][0]} 
                title = {books[1][2]} 
                author = {books[1][1]}
                />
        </section>
    )
}

const Book = (props) =>{
    const {img, title, author, children} = props
    return (
    <div className="book">
        <img src = {img} alt =""/>
        <p>{title}</p>
        <strong>{author}</strong>
        <p>{props.category}</p>
        {props.children}
    </div>
    )
}



export default Booklist;
