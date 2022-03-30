import { useState } from "react";

function AddTimer() {
    const [formData, setFormData] = useState (
        {
            title: "",
            time: ""
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
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input 
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
            <button>Add Timer</button>
        </form>
    )
}

export default AddTimer