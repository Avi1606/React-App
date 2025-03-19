export default function Price({OldPrice, NewPrice}) {
    let style = {textDecoration: "line-through" };
    return (
        <div className={Price}>
            <p style = {style} >{OldPrice}</p>
            <p>{NewPrice}</p>
        </div>
    );
};