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

    return <button className='bg-slate-400 hover:bg-orange-500 hover:text-white text-xl font-semibold py-2 px-4 border border-black rounded shadow m-4' type="button" onClick={handleClick}>
        {`${props.text || 'Add To Cart'}`}
    </button>
}