const Card = ({ children, onClick }) => {

    return (
        <div onClick={onClick} className={`bg-amber-300 flex items-center justify-center h-500 w-280 shadow-xl rounded-lg select-none`}>
            {children}
        </div>
    )
}

export default Card;