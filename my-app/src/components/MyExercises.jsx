import React from 'react'

const MyExercises = () => {
    const [exersises, setExersises] = React.useState([]);

    React.useEffect(() => {
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "test",
                password: "test"
            })
        })
        .then(res => { return res.json(); })
        .then(json => setExersises(json))
        .catch(err => console.log("Error: ", err));
    });

    return (
        <div>
            <h1>Mis ejercicios</h1>

            {
                exersises !== undefined && exersises.length > 0 &&
                <ul>
                    {
                        exersises.map((e, i) => {
                            <li key={i}>{e}</li>
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default MyExercises;
