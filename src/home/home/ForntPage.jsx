import { Link } from "react-router-dom";
const ForntPage = () => {
    return (
        <div>
            <div className="space-x-6">
                <Link to="/login" className="btn btn-warning rounded-xl">Login</Link>
                <button className="btn btn-primary rounded-xl">Register</button>
            </div>
        </div>
    );
};

export default ForntPage;