import './Error.css';


export default function Erorr() {
    return (
        <div className='error'>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
        >
            {/* Прозрачный фон */}
            <rect width="100" height="100" fill="transparent" />
            {/* Линии креста */}
            <line
            x1="20"
            y1="20"
            x2="80"
            y2="80"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            />
            <line
            x1="80"
            y1="20"
            x2="20"
            y2="80"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            />
        </svg>

        <p>Sorry, but your city was not found or is invalid :(</p>
    </div>
    );
}
