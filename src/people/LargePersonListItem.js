export const LargePersonListItem = ({ person }) => {
    const {name, age, hairColor, hobbies} = person;
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>HairColor: {hairColor}</p>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    );
};