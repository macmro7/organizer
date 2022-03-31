import plus from "../img/plus.png"
import { useState } from "react";

function AddTimer(props) {
    const [formData, setFormData] = useState (
        {
            id: "",
            name: "",
            seconds: ""
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        props.handleClick(formData)
        event.preventDefault()
        setFormData({   // clears form after adding a new timer
            id: '',
            name: '',
            seconds: ''
        })
    }

    return (
        <form className="add--timer" onSubmit={ handleSubmit }>
            <input className="add--timer--input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input className="add--timer--input"
                type="integer"
                name="seconds"
                value={formData.seconds}
                onChange={handleChange}
            />
            <button className="add--timer--submit"><img src={ plus }/></button>
        </form>
    )
}

export default AddTimer