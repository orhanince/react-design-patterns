export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
    console.log('items', items);
    console.log('resourceName', resourceName);
    console.log('itemComponent', ItemComponent);
    return (
        <>
            {items.map((item, i) => {
                return (
                    <ItemComponent key={i} {...{ [resourceName]: item}}/>
                )
            })}
        </>
    );
};