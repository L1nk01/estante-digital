import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import BookData from './views/BookData';
import { useBookData } from './hooks/useBookData';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  const bookInfo = useBookData();

  if (bookInfo === null) {
    return <div>Loading...</div>;
  }

  const bookRoutes = bookInfo.map(book => (
    <Route
      key={book.id}
      path={`/books/${book.id}`}
      element={<BookData bookData={book} />}
    />
  ));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home bookData={bookInfo} />} />
        {bookRoutes}
      </Routes>
    </div>
  )
}

export default App
