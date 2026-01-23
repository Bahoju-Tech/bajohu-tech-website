function Food(){

    const food1= "Rice and stew";
    const food2= "Yam and egg sauce";
    
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food;