import { useContext } from "react";
import { FormContext } from "./FormProvider";
import { STEPS, BUTTON_TEXT } from "../constants/formConstants";

function FormSteps(){
  const {step, theme, toggleTheme} = useContext(FormContext);

  return(
    <div className={`card ${theme}`}>
        <button onClick={toggleTheme}>
            {theme==="light" ?  "🌙 dark" : "☀️ light"}
        </button>
        <p>{step}/4</p>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
    </div>
  );

}

function StepOne(){
    const {formData, handleChange, emailError, nextStep} = useContext(FormContext)
    return(
    <>
      <h2>{STEPS[1].title}</h2>

      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="enter first name"
      />
<br />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="enter last name"
      />
<br />
       <input
        name="email"
        value={formData.email}
        onChange={(e)=>{
            handleChange(e);
        }}
        placeholder="enter email"
      />
      {emailError && 
      <p style={{color:"red"}}>{emailError}</p>
    }
<br /><br />
      <button onClick={nextStep}>{BUTTON_TEXT.NEXT}</button>
    </>
  );
}

function StepTwo(){
    const {formData, handleChange, nextStep, prevStep} = useContext(FormContext)
    return(
        <>
        <h2>{STEPS[2].title}</h2>
        <label>
            <input
            type="radio"
            name="gender" 
            value="male"
            checked={formData.gender === 'male'} 
            onChange={handleChange}
            />
            Male
        </label>
        <label>
            <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            />
            Female
        </label>
    <br />
        <input type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="enter dob"
        />
    <br /><br />
        <button className="btn" onClick={prevStep}>{BUTTON_TEXT.BACK}</button>
        <button onClick={nextStep}>{BUTTON_TEXT.NEXT}</button>
        </>
    );
}


function StepThree(){
    const {formData, handleChange, nextStep, prevStep} = useContext(FormContext)
    return(
        <>
        <h2>{STEPS[3].title}</h2>

        <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="enter state"
        />

        <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="enter city"
        />

        <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="enter zip"
        />
    <br /><br />
        <button className="btn" onClick={prevStep}>{BUTTON_TEXT.BACK}</button>
        <button onClick={nextStep}>{BUTTON_TEXT.NEXT}</button>
        </>
    );
}


function StepFour(){
    const {formData, prevStep} = useContext(FormContext)
    const handleSubmit = () => {
    console.log("Final Data:", formData);
  };

    return(
        <>
        <h2>{STEPS[4].title}</h2>
        <p>Name: {formData.firstName} {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Gender: {formData.gender}</p>
        <p>Date of birth: {formData.dob}</p>
        <p>State: {formData.state}</p>
        <p>City: {formData.city}</p>
        <p>Zip: {formData.zip}</p>
    <br /><br />
        <button className="btn" onClick={prevStep}>{BUTTON_TEXT.BACK}</button>
        <button onClick={handleSubmit}>{BUTTON_TEXT.SUBMIT}</button>
        </>
    );
}




export default FormSteps;