import PropTypes from 'prop-types';


const FriendsCard = ({ name, location, isFriend }) => {
    return (
        <>
            <h1>{name}</h1>
            <p>{location}</p>
            {isFriend ? <button>Add Friend</button> : null}
        </>
    )
}

FriendsCard.propTypes = {
    isFriend: PropTypes.bool.isRequired,
}

FriendsCard.defaultProps = {
    name: "Prince",
    location: "Europe"
}

export default FriendsCard;