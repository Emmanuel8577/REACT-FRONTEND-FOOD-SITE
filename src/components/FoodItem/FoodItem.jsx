import PropTypes from 'prop-types';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContex';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            className="add"
            src={assets.add_icon_white} // Assuming add_to_cart is the icon for adding items
            alt="Add to cart"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red} // Assuming minus_icon is the icon for removing items
              alt="Remove one"
              onClick={() => removeFromCart(id)}
            />
            <span>{itemCount}</span>
            <img
              src={assets.add_icon_green}
              alt="Add one"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₦{price}</p>
      </div>
    </div>
  );
};

// Prop validation
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
