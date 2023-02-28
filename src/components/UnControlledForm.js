import React from 'react';
export const UnControlledForm = () => {
    const nameInput = React.useRef();
    const ageInput = React.useRef();
    const hairColorInput = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" ref={nameInput}/>
            <input type="text" name="age" placeholder="Age" ref={ageInput} />
            <input type="text" name="hairColor" placeholder="Hair Color" ref={hairColorInput} />
            <input type="submit" value="Submit" />
        </form>
    )
}