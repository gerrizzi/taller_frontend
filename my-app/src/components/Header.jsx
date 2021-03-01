import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) => 
{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    {
                        props !== undefined && props.items !== undefined && Array.isArray(props.items) &&
                        props.items.map((e, i) => {
                            return <li key={i} className="nav-item"><Link to={e.To} className="text-light nav-link">{e.Text}</Link></li>
                        })
                    }
                </ul>
            </nav>
        </header>   
    )
};

export default Header;