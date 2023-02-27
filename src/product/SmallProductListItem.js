export const SmallProductListItem = ({ product }) => {
    const {name, price} = product;
    return (
        <>
            <h3>Product name: {name}</h3>
            <p>Product price: {price}</p>
        </>
    )
};