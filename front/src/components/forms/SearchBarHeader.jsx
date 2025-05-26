export function SearchBarHeader({onUpdate}) {

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const inputEl = form.elements['searchBar-header'];
        onUpdate(inputEl.value);
        form.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchBar-header" />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    );
}