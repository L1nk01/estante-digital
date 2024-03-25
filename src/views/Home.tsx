import BookList from "../components/BookList"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

interface BookDataProps {
  bookData: any;
}

function Home({ bookData }: BookDataProps) {
  return (
    <div>
      <Navbar />

      <div className='card-carousel'>
        <BookList bookData={bookData} />
      </div>

      <Footer />
    </div>
  )
}

export default Home
