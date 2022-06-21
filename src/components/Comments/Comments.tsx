import { CommentProps } from "../../typings";
import { Author } from "./Comments.styles";
import { CommentsProps } from "./Comments.types";

const Comments = ({ comments, isYou }: CommentsProps) => (
    { comments.map((item: CommentProps, index: number) => (
            <div key={index}>
                <div>
                <Author.Photo />
                </div>
                <div>
                <div>
                    <div>
                    <Author.Name>
                        name {isYou && <Author.You>isYou?</Author.You>}
                    </Author.Name>
                    <Author.PublishTime>Publishtime</Author.PublishTime>
                    </div>
                    <img src="trash-icon" />
                    <p>comment</p>
                </div>
                </div>
          </div>
        ))}
  );
};

export default Comments;
