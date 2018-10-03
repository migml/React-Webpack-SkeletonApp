import * as React from "react";
import { NavLink } from 'react-router-dom';

export class Home extends React.Component {
    public render() {
        return <div>Homee<br /><br /><br /><NavLink to="/about" >About</NavLink></div>;
    }
}