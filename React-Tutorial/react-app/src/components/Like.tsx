import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <div>
      {liked === true ? (
        <AiFillHeart color="#ff7ac1" size="50" onClick={toggle} />
      ) : (
        <AiOutlineHeart color="black" size="50" onClick={toggle} />
      )}
    </div>
  );
};

export default Like;
