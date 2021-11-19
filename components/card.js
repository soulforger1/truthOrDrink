const Card = ({ children, onClick }) => {

    return (
        <div
            onClick={onClick}
            className={`bg-amber-300 flex items-center justify-center h-500 w-280 shadow-xl rounded-lg select-none text-3xl font-semibold text-white`}
        >
            {children}
        </div>
    )
}

export default Card;