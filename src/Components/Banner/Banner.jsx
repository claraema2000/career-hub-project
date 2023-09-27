const Banner = () => {
    return (
        <div className="hero max-h-screen bg-indigo-50 bg-opacity-40 ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-around w-full">
                <div className=" mt-auto">
                    <img src="https://i.ibb.co/XL6x7Qj/user.png" className="max-w-lg rounded-lg" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">One Step
                        <br /> Closer To Your
                        <br /><span className="text-indigo-500"> Dream Job</span></h1>
                    <p className="py-6"></p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;