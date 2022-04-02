import { useState } from "react";
import plus from "../img/plus.png"

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

    function handleSubmit(event) { // event ???
        props.handleClick(formData)
        event.preventDefault()
        setFormData({   // clears form after adding a new timer
            id: '',
            name: '',
            seconds: ''
        })
    }

    function handleDelete(event) {
        /*setFormData(prevFormData => {
            const id = event.target.id
            return {
                ...prevFormData,
     
            }
        })*/

        /*setFormData({people: this.state.people.filter(function(person) { 
            return person !== e.target.value 
        })});*/
        const newArray = formData.filter(formData => formData.id === 1)
        console.log(newArray)

        setFormData((formData) => formData.filter(formData => formData.id === 1))
        

        //console.log("essa")
    }

    return (
        <div className="add--timer">
            <h1 className="add--timer--label">Add timer</h1>
            <form className="add--timer--form" onSubmit={ handleSubmit }>
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
        </div>
    )
}

export default AddTimer