const Home = () => {
    return ( 
        <div className="Home">
            <h2> Homepage </h2> <br/> <br/>
             <Library Tittle="The Coder Web App" 
                    Author="The Coder" 
                    Description="This is a
                simple web app that is used to display a list of books. It is a simple project
                that is used to demonstrate the use of React components and props." 
                    Date="2021-09-01"/>
                
        </div>
     );
}

const Library = (props) =>{
    return(
        <div className="Card">
            <h2>{props.Tittle}</h2> <hr/>
            <h3>{props.Author}</h3> <hr/>
            <p>{props.Description}</p> <hr/>
            <p>{props.Date}</p> <hr/>
        </div>
    )
}

export default Home;