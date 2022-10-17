import React, { Component } from "react";
import './VisualizadorEBar.css';
class VisualizadorEBar extends Component {
    render(){
        return (
        <div className="up">
                <nav aria-label="Breadcrumb" class="breadcrumb">
                        <ul class="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pictures</a></li>
                        <li><a href="#">Summer 15</a></li>
                        <li>Italy</li>
                    </ul>
                </nav>
        </div>
        );
    }
}
export default VisualizadorEBar;