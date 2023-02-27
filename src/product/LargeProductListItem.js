export const LargeProductListItem = ({product}) => {
    const {name, price, description, rating} = product;
    return (
        <>
            <h3>Product name: {name}</h3>
            <p>Product price: {price}</p>
            <p>Product description: {description}</p>
            <p>Product rating: {rating}</p>
        </>
    );
};