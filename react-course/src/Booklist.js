import React from 'react'
import './Booklist.css'
import {books} from './books' 
import Book from './Book'

const Booklist = () => {
    return (
        <section className="booklist">
            {books.map((i)=>{
                return (
                    <Book key={books.id} {...i}>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </Book>
                )
            })}
        </section>
    )
}
/* i is a property of props */




export default Booklist;
