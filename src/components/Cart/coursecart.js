import React, { Component } from 'react'
import Heading from '../reusable/heading'

export default class coursecart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
        }
    }

    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Courses"></Heading>
                    <div className="row"
                    >
                        {
                            this.state.mycourses.map(({node}) => {
                                return(
                                    // console.log(node.image.file.url)
                                    <div key={node.id} className="col-11 col-md-6 d-flex mx-auto my-3">
                                        <img height="120" width="200" src={node.image.file.url}></img>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success">$ {node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.description.description}</small>
                                            </p>
                                            <button
                                                className="btn btn-warning snipcart-add-item"
                                                data-item-id={node.id}
                                                data-item-price={node.price}
                                                data-item-url="http://learncodeonline.in"
                                                data-item-image={node.image.file.url}
                                                data-item-name={node.title}
                                             >
                                                 Join Now</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
