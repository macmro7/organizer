import { useState } from "react";
import plus from "../img/plus.png"

function AddTimer(props) {
    const [formData, setFormData] = useState (
        {
            id: "",
            name: "",
            seconds: "",

            nameError: "",
            secondsError: ""
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

    function validate() {
        let nameError = ""
        let secondsError = ""

        if (!formData.name) {
            nameError = "Name cannot be blank"
        }

        if (formData.name.length > 30) {
            nameError = "Name is too long"
        }

        if (!formData.seconds) {
            secondsError = "Time cannot be blank"
        }

        if (nameError || secondsError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: nameError,
                    secondsError: secondsError
                }
            })
            return false
        }

        return true
     }

    function handleSubmit(event) { // event ???
        event.preventDefault()
        const isValid = validate()

        if (isValid) {
            props.handleClick(formData)
            setFormData({   // clears form after adding a new timer
                id: '',
                name: '',
                seconds: ''
            })
        }
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
            <label className="add--timer--label">Add timer</label>
            <form className="add--timer--form" onSubmit={ handleSubmit }>
                <div className="input--box">
                    <input className="add--timer--input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label>{ formData.nameError }</label>
                </div>
                <div className="input--box">
                    <input className="add--timer--input"
                        type="integer"
                        name="seconds"
                        placeholder="Time"
                        value={formData.seconds}
                        onChange={handleChange}
                    />
                    <label>{ formData.secondsError }</label>
                </div>
                <button className="add--timer--submit"><img src={ plus }/></button>
            </form>
        </div>
    )
}

export default AddTimer