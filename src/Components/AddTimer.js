import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import plus from "../img/plus.png"

function AddTimer(props) {
    const { handleClick } = props

    const [formData, setFormData] = useState (
        {
            id: "",
            name: "",
            minutes: "",
            seconds: "",
            targetRep: "",
            currentRep: 0,

            nameError: "",
            secondsError: "",
            minutesError: "",
            repError: ""
        }
    )
    const navigate = useNavigate()

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
        let minutesError = ""
        let repError = ""

        if (!formData.name) {
            nameError = "This field is required"
        }

        if (formData.name.length > 30) {
            nameError = "Name is too long"
        }

        if (!formData.seconds) {
            secondsError = "This field is required"
        }

        if (formData.seconds.length > 5 || formData.seconds > 59) {
            secondsError = "Number is too long"
        }

        if (formData.seconds < 0) {
            secondsError = "Number cannot be negative"
        }

        if (!formData.minutes) {
            minutesError = "This field is required"
        }

        if (formData.minutes.length > 4) {
            minutesError = "Number is too long"
        }

        if (formData.minutes < 0) {
            minutesError = "Number cannot be negative"
        }

        if (!formData.targetRep) {
            repError = "This field is required"
        }

        if (formData.targetRep < 0) {
            repError = "Number cannot be negative"
        }

        if (nameError || secondsError || minutesError || repError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: nameError,
                    secondsError: secondsError,
                    minutesError: minutesError,
                    repError: repError,
                }
            })
            return false
        }

        return true
     }

    function handleSubmit(event) {
        event.preventDefault()
        const isValid = validate()

        if (isValid) {
            handleClick(formData)
            setFormData({   // clears form after adding a new timer
                id: '',
                name: '',
                seconds: '',
                minutes: '',
                targetRep: ''
            })
            navigate("/manage")
        }
    }

    return (
        <div className="add--timer">
            <form className="add--timer--form" onSubmit={ handleSubmit }>
            <label className="add--timer--label">Add timer</label>
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
                        type="number"
                        name="minutes"
                        placeholder="Minutes"
                        value={formData.minutes}
                        onChange={handleChange}
                    />
                    <label>{ formData.minutesError }</label>
                </div>
                <div className="input--box">
                    <input className="add--timer--input"
                        type="number"
                        name="seconds"
                        placeholder="Seconds"
                        value={formData.seconds}
                        onChange={handleChange}
                    />
                    <label>{ formData.secondsError }</label>
                </div>
                <div className="input--box">
                    <input className="add--timer--input"
                        type="number"
                        name="targetRep"
                        placeholder="Repetitions"
                        value={formData.targetRep}
                        onChange={handleChange}
                    />
                    <label>{ formData.repError }</label>
                </div>
                
                <button className="add--timer--submit"><img src={ plus } alt="plus"/></button>
            </form>
        </div>
    )
}

export default AddTimer