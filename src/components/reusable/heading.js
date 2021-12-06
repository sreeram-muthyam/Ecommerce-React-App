import React from 'react'

export default function heading({title}) {
    return (
        <div className="row">
            <div className="col text-center mb-4">
                <h1 className="display-3" style={{fontSize:'50px'}}>{title}</h1>
            </div>
        </div>
    )
}


