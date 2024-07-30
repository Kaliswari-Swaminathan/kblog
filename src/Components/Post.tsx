import Blog from "./Blog";

export const Post:React.FC<{content:Blog}> = (props) => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
        {props.content.img?
        <img
        src={require(`../Images/books/${props.content.img}.png`)}
        width='151'
        height='233'
        alt="book"
    />:
                <img
                src={require('../Images/books/book1.png')}
                width='151'
                height='233'
                alt="book"
            />
        }                  
             
                <h3 className='mt-2'>{props.content.title}</h3>
                <h5>{props.content.author}</h5>
                <h6>{props.content.date}</h6>
                <p>{props.content.description}</p>
                <a className='btn main-color text-white' href='#'>Read More</a>
          </div>
          </div>
          
    
        
    );
}