import './Loader.css';

interface LoaderProps {
    size?: number;
}

function Loader({ size = 1}: LoaderProps) {

    const fontSize = size * 20 + 'px';

    return (
        <div className='loader' style={{ fontSize: fontSize }}>
            <span className='loader-bubble'></span>
            <span className='loader-bubble'></span>
            <span className='loader-bubble'></span>
        </div>
    );
}

export default Loader;