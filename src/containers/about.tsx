import * as React from "react";
import { NavLink } from 'react-router-dom';

export class About extends React.Component {
    public render() {
        return <div>About<br /><br /><br /><NavLink to="/home" >Home</NavLink></div>;
    }
}