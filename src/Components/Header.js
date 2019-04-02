import React from 'react';
import Nav from "./Nav";
import "./Header.css";

export default class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <Nav />
            </div>
        )
    }
}