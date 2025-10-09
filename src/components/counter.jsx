//               destructuring props 
//                        use of rest operator
function Counter({ title, ...obj }) {
    return (
        <div>
            {/*value get form the rest operator {obj.count} */}
            <h1>{title}: {obj.count}</h1>
        </div>
    )
}

export default Counter;
