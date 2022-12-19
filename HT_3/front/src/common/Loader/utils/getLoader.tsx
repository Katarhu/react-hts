import Loader from '../Loader';

const getLoader = (loadingType: string, preferredLoadingType: string, size = 1) => {


    if (!(loadingType === preferredLoadingType)) return;

    return (
        <Loader size={size} />
    )
}

export default getLoader;