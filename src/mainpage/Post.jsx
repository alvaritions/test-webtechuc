import './Post.css';
import {useContext, useState} from 'react';

export default function Post({id, pregunta, likes}) {
  const [like, setLike] = useState(false);

  const togglelike = () => {
    console.log(1);
    console.log(like);
    setLike(!like);
  };

  return (
    <div className="post">

      <p className="question">
        {id} <br />
        {pregunta}<br />
      </p>

      <p className="comments">
        Comentarios:
      </p>

      <div className="like-button">
        <button onClick={togglelike}>Like</button>
        <p>
          {like ? likes + 1 : likes}
        </p>
      </div>

    </div>
  );
}
