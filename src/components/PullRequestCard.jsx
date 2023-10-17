import classNames from "classnames";
import IconNumber from "../assets/icons/icon-number.svg";
import IconComment from "../assets/icons/icon-comment.svg";
import IconRedirect from "../assets/icons/icon-redirect.svg";
import { useCommentsApi } from "../hooks";
import { useCallback } from "react";
import { REPO_OWNER, REPO_NAME } from "../utils/constants";

/* eslint-disable react/prop-types */
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

const InfoNode = ({ icon, iconClassName, label }) => {
  return (
    <div className="px-4 flex items-center gap-4">
      <img
        className={classNames(
          "rounded-full w-6 h-6 bg-gray-100",
          iconClassName
        )}
        src={icon}
      />
      <label>{label}</label>
    </div>
  );
};

const CommentNode = ({ pullNumber }) => {
  const { count } = useCommentsApi(pullNumber);
  return <InfoNode icon={IconComment} iconClassName="" label={count} />;
};
