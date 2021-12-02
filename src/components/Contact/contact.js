import React from 'react'
import Heading from '../reusable/heading'

export default function contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/f/xbjwrbro" method="POST">
                    <div className="form-group">
                    <input className="form-control" type="text" name="name" id="name" 
                            placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="text" name="email" id="email" 
                            placeholder="Youe Email"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="text" name="mobile" id="mobile" 
                            placeholder="Your Mobile No."/>
                    </div>
                    <div className="form-group">
                    <textarea className="form-control" type="text" name="msg" id="msg" 
                            placeholder="Your Message"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
