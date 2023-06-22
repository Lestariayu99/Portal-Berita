import React from "react";
import NewsApp from "./Pages/indexsatu";
import App from "./Pages/portal";


export default class PortalNews extends React.Component {

    render() {
        return (
            <div>
                <NewsApp />
                <App />
               
            </div>
        )
    }
}