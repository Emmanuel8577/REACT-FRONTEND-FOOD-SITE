import  { useContext } from "react";
import "./FoodDisplay.css";
import PropTypes from 'prop-types';
import { StoreContext } from "../Context/StoreContex";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display" id="food-display">
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

// Prop validation
FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired,
};

export default FoodDisplay;
