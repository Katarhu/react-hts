const getFormError = (error: string ) => {
    if ( error === '' ) return;

    return (
        <p className='form-error'>{error}</p>
    )
}

export default getFormError;
