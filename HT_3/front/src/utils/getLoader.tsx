import Loader from '../common/Loader/Loader';

const getLoader = (isLoading: boolean, size = 1) => {
    if (!isLoading) return;

    return (
        <Loader />
    )
}

export default getLoader;