import { Author } from "./Comment.styles";

interface CommentProps {
  authorPhoto: string;
  authorName: string;
  isYou: boolean;
  publishTime: Date;
  comment: string;
  likes: number;
  isLiked: boolean;
  onIconPress: () => void;
}

const Comment = ({
  authorPhoto,
  authorName,
  isYou,
  publishTime,
  comment,
  likes,
  isLiked,
  onIconPress,
}: CommentProps) => {
  return (
    <>
      <div>
        <div>
          <Author.Photo src={authorPhoto} />
        </div>
        <div>
          <div>
            <div>
              <Author.Name>
                {authorName} {isYou && <Author.You>isYou?</Author.You>}
              </Author.Name>
              <Author.PublishTime>{String(publishTime)}</Author.PublishTime>
            </div>
            <img src="trash-icon" />
            <p>{comment}</p>
          </div>
        </div>
      </div>
      {/* Criar prop nos styles e os textos no i18n */}
      <LikeButton isLiked={isLiked}>Aplaudir {likes}</LikeButton>
    </>
  );
};

export default Comment;
