const getFormErrors = (errors: string[] | null ) => {
    if (errors == null || !errors.length ) return;

    const errorItems = errors.map((error) => (
        <li key={error} className='form-error'>{error}</li>
    ))

    return (
        <ul className='form-errors'>
            {errorItems}
        </ul>
    )
}

export default getFormErrors;