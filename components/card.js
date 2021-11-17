const Card = ({ children, onClick }) => {

    return (
        <div onClick={onClick} className={`bg-yellow-500 flex flex-col items-center justify-center h-500 w-280 py-2`}>
            {children}
        </div>
    )
}

export default Card;