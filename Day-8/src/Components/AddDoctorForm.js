import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { doctorsAdded } from "../features/doctor/doctorsSlice"
import { selectAllDoctors } from "../features/doctor/doctorsSlice"
import '../Styles/Login.css';


const AddDoctorForm = () => {
    const doctors = useSelector(selectAllDoctors)

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [qualification, setQualification] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [exp, setExp] = useState('')
    const [age, setAge] = useState('')
    const [rating, setRating] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onQualificationChanged = e => setQualification(e.target.value)
    const onSpeicalizationChanged = e => setSpecialization(e.target.value)
    const onExpChanged = e => setExp(e.target.value)
    const onAgeChanged = e => setAge(e.target.value)
    const onRatingChanged = e => setRating(e.target.value)

    const onSaveDoctor = () => {
        if(name && qualification && specialization && exp && age && rating)
        {
            dispatch(
                doctorsAdded(name, qualification, specialization, exp, age, rating)
            )
            setName('')
            setAge('')
            setQualification('')
            setSpecialization('')
            setExp('')
            setAge('')
            setRating('')
        }
    }

    const canSave = Boolean(name) && Boolean(qualification) && Boolean(specialization) && Boolean(exp) && Boolean(age) && Boolean(rating)

    return (
        <section className="whole-form">
            
            <form className="container">
                <label htmlFor="doctorName">Doctor name: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="doctor name"
                placeholder="Name"
                value = {name}
                onChange={onNameChanged}
                /><br/>
                <label htmlFor="qualification">Qualifications: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="qualification"
                placeholder="Qualification"
                value = {qualification}
                onChange={onQualificationChanged}
                /><br/>
                <label htmlFor="specialization">Specialization:  </label><br/>
                <input 
                type="text"
                className="form-control"
                name="Specialization"
                placeholder="Specialization"
                value = {specialization}
                onChange={onSpeicalizationChanged}
                /><br/>
                <label htmlFor="Exp">Experience: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="experience"
                placeholder="Experience"
                value = {exp}
                onChange={onExpChanged}
                /><br/>
                <label htmlFor="doctorName">Doctor Age: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="doctor age"
                placeholder="age"
                value = {age}
                onChange={onAgeChanged}
                /><br/>
                <label htmlFor="doctorName">Doctor Rating: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="doctor rating"
                placeholder="rating"
                value = {rating}
                onChange={onRatingChanged}
                /><br/>
                <button  className="btn btn-primary"type="button" onClick={onSaveDoctor} disabled={!canSave}><a href="/admin">Save</a></button>
            </form>
        </section>
    )
}

export default AddDoctorForm