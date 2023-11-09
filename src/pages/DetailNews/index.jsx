import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailNews = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default DetailNews;
