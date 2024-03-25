import Navbar from '../components/Navbar'
import './BookData.css'
import PictureModal from '../components/PictureModal';
import Footer from '../components/Footer';
import CreateComment from '../components/CreateComment';

interface BookDataProps {
  bookData: any;
}

function BookData({ bookData }: BookDataProps) {

  return (
    <div>
      <Navbar />
 
      <main>
        <div className='left-panel'>
          <PictureModal modalTitle={bookData.volumeInfo.title} imageUrl={bookData.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/200x320'} />
          
          <div>
            <p className='book-title'>{bookData.volumeInfo.title}</p>
            <p className='book-authors'>{bookData.volumeInfo.authors}</p>
            <p className='book-publisher'>{bookData.volumeInfo.publisher}</p>
            <p>{bookData.volumeInfo.publishedDate}</p>

            <a href={bookData.volumeInfo.previewLink}>Preview del libro</a>
            <a href={bookData.volumeInfo.infoLink}>Link de compra</a>
          </div>
        </div>

        <div className='right-panel'>
          <h1>Descripción</h1>
          <div className='description-section'>
            <p className='book-publisher'>{bookData.volumeInfo.description}</p>
          </div>
          <div className='comment-section'>
            <CreateComment />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BookData
