const Book = (props) =>{
    const {img, title, author, children} = props 
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert('Hello World')
    }
    const complexExample = () => {
        console.log(author)
    }
    return (
    <div className="book" onMouseOver={()=> {
        console.log(title);
    }}>
        <img src = {img} alt =""/>
        <p>{title}</p>
        <strong>{author}</strong>
        {children}
        <button type="button" onClick={clickHandler}>Reference example</button>
        <button type="button" onClick={()=>complexExample(author)}>authors</button>
    </div>
    )
}

export default Book 
    