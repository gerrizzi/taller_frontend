import React from 'react';
import {Link} from 'react-router-dom';

const AgeOfEmpires = () => {
    const [civilizations, setCivilizations] = React.useState([]);

    React.useEffect(
        () => {
            GetCivilizations(setCivilizations);
        }
    );

    const GetCivilizations = async (callBack) => {
        await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                let {civilizations} = json ?? [];
                callBack(civilizations);
            })
            .catch((err) => console.error("Error -> ", err));
    }

    return (
        <div>
            <h1>Age Of Empires</h1>
            {
                civilizations.length > 0 &&
                <ul>
                    {
                        civilizations.map((c, i) => (
                            <li key={i}><Link to={`AgeOfEmpires/${c.id}`}>{c.name} - {c.expansion}</Link></li>
                        ))
                    }
                </ul>
            }
        </div>
    );
}

export default AgeOfEmpires;