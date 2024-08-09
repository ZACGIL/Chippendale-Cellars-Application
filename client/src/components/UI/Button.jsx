export default function Button(props) {

    const handleClick = (e) => {
        e.preventDefault();

        if (props.callback) {
            props.callback();
        }

        if (props.link) {
            document.location = props.link;
        }
    }

    return <button className={`${props.className || 'text-center'}`} type="button" onClick={handleClick}>
        {`${props.text || 'Add To Cart'}`}
    </button>
}