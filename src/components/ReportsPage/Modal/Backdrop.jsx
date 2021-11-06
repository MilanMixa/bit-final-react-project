import "./Backdrop.css"

const Backdrop = (props) => {

    return (
        props.showModal && 
        <div className="backdrop" onClick={props.cancelModal}></div>
    )
}

export default Backdrop;