export const UserInfo = ({ user }) => {
    const {name, age, hairColor, hobbies} = user || {};
    return user ? (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>HairColor: {hairColor}</p>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </>
    ): <p>Loading...</p>;
};