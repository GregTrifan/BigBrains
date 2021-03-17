import Navbar from "./Navbar";

const Main = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};
export default Main;
