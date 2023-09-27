import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-52">
            <h2 className="text-6xl font-extrabold mb-5">OOPS<span className="text-red-500"> !!!</span></h2>
            <h4 className="text-2xl font-bold text-slate-800 mb-5">Your searching page is not found</h4>
            <Link to='/' className="underline text-green-600 text-lg font-semibold">Go Home</Link>
        </div>
    );
};

export default ErrorPage;