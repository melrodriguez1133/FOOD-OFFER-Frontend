import React, { Component } from "react";
import GoogleMap from "react-google-maps/lib/components/GoogleMap";
export default class Maps extends Component {
    render(){
        return (
            <div className="container">
                <GoogleMap
                apiKey={'AIzaSyADAhzVh9siTsGLIFodXos728KhmoGSnt0'}
                style={{height: "500px", width: "380px"}}
                zoom={10}
                center={{
                    lat: 9.423765,
                    lng:-1.664428,
                }}
                />
            </div>
        );
    }
}