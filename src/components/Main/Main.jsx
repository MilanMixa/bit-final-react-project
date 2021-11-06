
import "./Main.css";


const Main = (props) => {


    return (
        <div className="main container-fluid">
            {props.children}
        </div>
    )
};

export default Main;