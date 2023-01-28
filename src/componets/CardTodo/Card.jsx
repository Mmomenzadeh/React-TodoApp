import "./card.css"

const Card = ({TodoItem})=>{

    return(
        <li className="cardTodo-container">
            <div className="todo-content">
                
            <h2>{TodoItem.title}</h2>
            <p> {TodoItem.describe} </p>
            </div>
            <div className="card-btn" >
                <button className="btn-action">Delete</button>
                <button className="btn-action">Edite</button>
                <button className="btn-action">Done</button>

            </div>
        </li>
    )
}


export default Card