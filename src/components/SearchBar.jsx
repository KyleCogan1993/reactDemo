export default function SearchBar() {
    return (
        <>
            <form>
                <input type="text" placeholder="search..."/>
                <label>
                    <input type="checkbox"/>
                    Only Show Product in Stock
                </label>
            </form>
        </>
    );
}