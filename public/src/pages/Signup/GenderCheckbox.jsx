import React from 'react';

const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
    return (
        <div className="gender">
            <div className="gendertext">
                <h1>Gender:</h1>
            </div>
            <div className="formcontrol">
                <label htmlFor="male" className={selectedGender === "male" ? "selected" : ""}> 
                    Male
                    <input 
                        type="radio" 
                        id="male"
                        name="gender"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckBoxChange("male")}
                    />
                </label>
            </div>
            <div className="formcontrol">
                <label htmlFor="female" className={selectedGender === "female" ? "selected" : ""}>
                    Female
                    <input 
                        type="radio" 
                        id="female"
                        name="gender"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckBoxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;
