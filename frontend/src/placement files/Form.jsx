import './App.css'
function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted');
    };

    return (
        <>
         <h1 id="h">Form</h1>
         <form id="form-content">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" /><br />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" /><br />
                <label htmlFor="Address">Address:</label>
                <input type="text" id="Address" name="Address" /><br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" /><br />
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" /><br />
                <div className="gender-container">
                    <label>Gender:</label>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" id="others" name="gender" value="others" />
                    <label htmlFor="others">Others</label>
                </div>
            </form>
            <div id="btn">
            <button type="reset" form="myForm">RESET</button>
            <button type="submit" onClick={handleSubmit}>SUBMIT</button>

            </div>
            
            
        </>
    );
}
export default Form;