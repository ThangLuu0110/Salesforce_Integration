import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

interface HomeProps{

}

export default class HomePage extends Component<HomeProps>{
    render() {
        return (
            <div className="homepage grid">
                <div className="homepage__stadium grid">
                    <div className="homepage__stadium--information">
                        
                    </div>
                    <div className="homepage__stadium--information">
                        
                    </div>
                    <div className="homepage__stadium--information">
                        hello
                    </div>
                </div>
            </div>
        )
    }
}