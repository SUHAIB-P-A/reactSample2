
function Counter(params) {
    const {title, count} = params;
    return (
        <div>
            <h1>{title}: {count}</h1>
        </div>
    )
}

export default Counter;
