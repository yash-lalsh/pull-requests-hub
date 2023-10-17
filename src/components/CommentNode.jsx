import { useCommentsApi } from "../hooks";
import { InfoNode } from "./InfoNode";
import IconComment from "../assets/icons/icon-comment.svg";

export const CommentNode = ({ pullNumber }) => {
  const { count } = useCommentsApi(pullNumber);
  return <InfoNode icon={IconComment} iconClassName="" label={count} />;
};
