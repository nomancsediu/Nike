const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
            ${backgroundColor ?? 'bg-coral-red'} ${borderColor ?? 'border-coral-red'} ${textColor ?? 'text-white'}`}>
            {label}
            {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
        </button>
    );
};

export default Button;