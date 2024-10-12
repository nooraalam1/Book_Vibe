const Home = () => {
    return (
        <div>
            <div className="p-5 sm:p-10">
                {/* Adjusted background to a more grayish tone, reduced height, and added rounded corners */}
                <div className="hero bg-gray-300 w-2/3 mx-auto min-h-[50vh] rounded-lg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {/* Image with smaller size for all screens */}
                        <img
                            src="../../imgs/b1.jpg"
                            className="max-w-[150px] sm:max-w-[200px] rounded-lg shadow-3xl"
                            alt="Bookshelf"
                        />
                        <div className="text-center lg:text-left">
                            <h1 className="text-xl sm:text-2xl font-bold mb-4">
                                Books To Freshen Up Your Bookshelf
                            </h1>
                            <button className="btn btn-sm btn-success">View The List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
