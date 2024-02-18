export default function SearchBar({filterText, setFilterText, inStockOnly, setInStockOnly}) {
    return (
        <>
            <form>
                <input type="text" placeholder="search..." value={filterText} onChange={event=>{setFilterText(event.target.value)}}/>
                <label>
                    <input type="checkbox" checked={inStockOnly} onChange={event => setInStockOnly(event.target.checked)}/>
                    Only Show Product in Stock
                </label>
            </form>
        </>
    );
}