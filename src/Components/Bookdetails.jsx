import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetails = () => {
    const load = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const book = load.find(item => item.bookId === intId)

    return (
        <div>
            <div className="flex justify-center items-center gap-10">
                <div className="">
                    <img className='w-72' src={book.image} alt="" srcset="" />
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold py-3">{book.bookName}</h1>
                    <p className=' text-green-600 py-3'>By: {book.author}</p> <hr />
                    <p className=' text-blue-600 py-3'>{book.category}</p> <hr />
                    <p className='py-3'>Review: {book.review}</p>
                    <p className='py-3'>{book.tags.map(tag => <p>#{tag}</p>)}</p> <hr />
                    <p className='py-3'>Publisher: {book.publisher}</p>
                    <p className='py-3'>Rating: {book.rating}</p>
                    <p className='py-3'>Year of Publishing: {book.yearOfPublishing}</p>
                    <p>Pages: {book.totalPages}</p>
                    <div className="flex items-center gap-5">
                        <button className="btn btn-ghost">Read</button>
                        <button className="btn btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;