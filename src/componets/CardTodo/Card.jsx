import "./card.css"

const Card = ()=>{

    return(
        <li>
            <h2>Title</h2>
            <p> Describe Todo </p>
            <div className="card-btn" >
                <button className="btn-action">Delete</button>
                <button className="btn-action">Edite</button>
                <button className="btn-action">Check</button>

            </div>
        </li>
    )
}


export default Card