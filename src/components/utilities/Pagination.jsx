const Pagination = ({page, setPage, lastPage}) => {

    const scrollTop = () => {
        // digunakan untuk menggulirkan ke atas dengan smooth
        scrollTo({
            behavior: "smooth",
            top: 0
        });
    }

    const handleOnPrevCLick = () => {
        if(page > 1) {
            setPage(p => p - 1);
            scrollTop();
        }
    }

    const handleOnNextCLick = () => {
        if(page < lastPage) {
            setPage(p => p + 1);
            scrollTop();
        }
    }

    return (
        <div className="text-2xl flex justify-center items-center gap-4 py-4 text-color-primary">
            {
                page <= 1 ?
                null :
                <button className="hover:text-color-accent transition-all duration-200 ease-linear" onClick={handleOnPrevCLick}>Prev</button>
            }

            <p>{page} of {lastPage}</p>

            {
                page >= lastPage ?
                null :
                <button className="hover:text-color-accent transition-all duration-200 ease-linear" onClick={handleOnNextCLick}>Next</button>
            }
        </div>
    )
}

export default Pagination;