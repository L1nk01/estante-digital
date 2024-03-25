import CardComponent from "./CardComponent";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks?: {
      smallThumbnail: string;
    };
  };
}

interface BookListProps {
  bookData: Book[] | undefined;
}

const BookList: React.FC<BookListProps> = ({ bookData }) => {
  if (!bookData) {
    return <div>Loading...</div>;
  }

  const bookList = bookData.map((book: Book, index: number) => (
    <CardComponent
      key={index}
      id={book.id}
      src={book.volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/200x320'}
      title={book.volumeInfo.title}
      author={book.volumeInfo.authors.join(", ")}
    />
  ));

  return <div>{bookList}</div>;
};

export default BookList
