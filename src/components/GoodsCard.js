import React from "react"

function GoodsCard(props) {
    return (
        <div className="card">
            <img width={200} height={200} src={props.src} alt='banana'/>
            <p>{props.name}</p>
            <p>{props.number}</p>
        </div>
    )
}

export default GoodsCard
