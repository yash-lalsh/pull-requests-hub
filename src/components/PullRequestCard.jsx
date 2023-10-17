import IconNumber from "../assets/icons/icon-number.svg";
import IconRedirect from "../assets/icons/icon-redirect.svg";
import { useCallback } from "react";
import { REPO_OWNER, REPO_NAME } from "../utils/constants";
import { InfoNode } from "./InfoNode";
import { CommentNode } from "./CommentNode";

export const PullRequestCard = ({ title, number, user }) => {
  // console.log("PullRequestCard: ", number);

  const onRedirectClick = useCallback(() => {
    window.open(
      `https://github.com/${REPO_OWNER}/${REPO_NAME}/pull/${number}`,
      "_blank"
    );
  }, [number]);

  return (
    <div className="border bg-white rounded-md shadow-sm">
      <div className="p-4 border-b flex items-start justify-between">
        <label className="block font-medium flex-1">{title}</label>
        <button
          className="p-1 hover:bg-gray-100 rounded-full -mr-1"
          onClick={onRedirectClick}
        >
          <img src={IconRedirect} />
        </button>
      </div>
      <div className="space-y-2 py-4">
        <InfoNode icon={user.avatar_url} label={user.login} />
        <InfoNode icon={IconNumber} label={number} iconClassName="p-1.5" />
        <CommentNode pullNumber={number} />
      </div>
    </div>
  );
};
