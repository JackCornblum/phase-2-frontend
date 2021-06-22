

function FoodItem({title, image, id}) {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} />
        </div>
    )
}

export default FoodItem