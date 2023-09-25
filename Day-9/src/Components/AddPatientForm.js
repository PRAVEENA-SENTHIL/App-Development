import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { patientsAdded } from "../features/patient/patientsSlice"
import { selectAllPatients } from "../features/patient/patientsSlice"
import '../Styles/Login.css';


const AddDoctorForm = () => {
    const patients = useSelector(selectAllPatients)

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [consultation, setConsultation] = useState('')
    const [insurance, setInsurance] = useState('')
    const [prev, setPrev] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onageChanged = e => setAge(e.target.value)
    const onSpeicalizationChanged = e => setGender(e.target.value)
    const onconsultationChanged = e => setConsultation(e.target.value)
    const onInsuranceChanged = e => setInsurance(e.target.value)
    const onprevChanged = e => setPrev(e.target.value)

    const onSaveDoctor = () => {
        if(name && age && gender && consultation && insurance && prev)
        {
            dispatch(
              patientsAdded(name, age, gender, consultation, insurance, prev)
            )
            setName('')
            setAge('')
            setAge('')
            setGender('')
            setConsultation('')
            setInsurance('')
            setPrev('')
        }
    }

    const canSave = Boolean(name) && Boolean(age) && Boolean(gender) && Boolean(consultation) && Boolean(insurance) && Boolean(prev)

    return (
        <section className="whole-form">
            <form className="conatiner">
                <label htmlFor="doctorName">Patient name: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="doctor name"
                placeholder="Name"
                value = {name}
                onChange={onNameChanged}
                /><br/>
                <label htmlFor="age">Patient age: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="age"
                placeholder="age"
                value = {age}
                onChange={onageChanged}
                /><br/>
                <label htmlFor="gender">Patient gender:  </label><br/>
                <input 
                type="text"
                className="form-control"
                name="gender"
                placeholder="gender"
                value = {gender}
                onChange={onSpeicalizationChanged}
                /><br/>
                <label htmlFor="consultation">Patient consultation: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="consultationerience"
                placeholder="consultationerience"
                value = {consultation}
                onChange={onconsultationChanged}
                /><br/>
                <label htmlFor="doctorName">Patient Insurance: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="doctor age"
                placeholder="insurance"
                value = {insurance}
                onChange={onInsuranceChanged}
                /><br/>
                <label htmlFor="doctorName">Patient previous history: </label><br/>
                <input 
                type="text"
                className="form-control"
                name="doctor prev"
                placeholder="prev"
                value = {prev}
                onChange={onprevChanged}
                /><br/>
                <button className="/btn btn1-primary" type="button" onClick={onSaveDoctor} disabled={!canSave}><a href="/admin">Save</a></button>
            </form>
        </section>
    )
}


export default AddDoctorForm