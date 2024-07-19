const GenderCheckbox = ()=>{
    return (
        <div className="gender">
            <div className="gendertext">
                <h1>Gender :</h1>
            </div>
            <div className="formcontrol">
                <label htmlFor="male">Male
                <input type="checkbox" />
                </label>
            </div>
            <div className="formcontrol">
                <label htmlFor="female">Female
                <input type="checkbox" />
                </label>
            </div>
        </div>
    )
};

export default GenderCheckbox;