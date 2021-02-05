import React from 'react';
import { useParams } from 'react-router-dom';


const Civilizacion = () => {
    const { id } = useParams();
    const [civilization, setCivilization] = React.useState({});

    React.useEffect(() => {
        GetCivilization(setCivilization);
    });

    const GetCivilization = async (callBack) => {
        await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                callBack(json ?? {});
            })
            .catch((err) => console.error("Error -> ", err));
    }

    return (
        <div>
            {
                civilization != undefined && civilization != null &&
                <div>
                    <h2>{civilization.name}</h2>
                    <ul>
                        {
                            Object.entries(civilization).map((prop, i) => {
                                <li key={i}>{prop[0]}: {prop[1]}</li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Civilizacion;