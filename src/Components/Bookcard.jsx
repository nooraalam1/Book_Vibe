import { NavLink } from "react-router-dom";

const Bookcard = ({ aInfo }) => {
    return (
        <div className="flex justify-center"> {/* Center the card */}
            <div className="card bg-base-100 w-72 shadow-xl my-3">
                <NavLink to={`/bookdetails/${aInfo.bookId}`}>
                    <figure className="overflow-hidden"> {/* Image container */}
                        <img
                            src={aInfo.image}
                            alt={aInfo.bookName}
                            className="h-40 w-full object-contain" // Basic image display
                        />
                    </figure>
                    <div className="card-body p-2">
                        <h2 className="card-title text-base">{aInfo.bookName}</h2>
                        <p className="text-sm">{aInfo.review}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-green-600">By: {aInfo.author}</p>
                            <p className="text-sm text-blue-600">{aInfo.category}</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex space-x-2">
                                <div className="badge badge-outline text-xs">Pages: {aInfo.totalPages}</div>
                                <div className="badge badge-outline text-xs">Rating: {aInfo.rating}</div>
                                <div className="badge badge-outline text-xs">Published: {aInfo.yearOfPublishing}</div>
                            </div>
                        </div>
                    </div>
                </NavLink >
            </div>
        </div >
    );
};

export default Bookcard;
