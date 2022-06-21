

const Name = ({ handleName }) => {
    return (
        <div>
            <input type="text" onChange={(e) => handleName(e.target.value)} />
        </div>
    )
}

export default Name;