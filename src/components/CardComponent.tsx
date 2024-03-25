import { Link } from 'react-router-dom';
import './CardComponent.css'

interface CardProps {
  id: string;
  src: string;
  title: string;
  author: string;
}

function CardComponent({ id, src, title, author }: CardProps) {
  return (
    <Link to={`/books/${id}`} className='unstyled-link'>
      <div id="card-component">
        <img src={src} alt={`${title} book cover.`} />
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </Link>
  );
}

export default CardComponent
