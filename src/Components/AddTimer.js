import { useState } from "react";

function AddTimer(props) {
    const [formData, setFormData] = useState (
        {
            id: 3,
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
        // setFormData({
        //     id: '',
        //     name: '',
        //     seconds: ''
        // })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                name="name"
                value={formData.title}
                onChange={handleChange}
            />
            <input 
                type="time"
                name="seconds"
                value={formData.time}
                onChange={handleChange}
            />
            <button>Add Timer</button>
        </form>
    )
}

export default AddTimer