import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { GITHUB_ACCESS_TOKEN, REPO_NAME, REPO_OWNER } from "../utils/constants";

export const usePullRequestsApi = () => {
  const [loading, toggleLoading] = useState(true);
  const [pullRequestsData, setPullRequestsData] = useState([]);

  useEffect(() => {
    const octokit = new Octokit({
      auth: GITHUB_ACCESS_TOKEN,
    });
    octokit
      .request("GET /repos/{owner}/{repo}/pulls", {
        owner: REPO_OWNER,
        repo: REPO_NAME,
      })
      .then((res) => {
        console.log("pr list res: ", res);
        toggleLoading(false);
        setPullRequestsData(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
        toggleLoading(false);
      });
  }, []);

  return { loading, data: pullRequestsData };
};

export const useCommentsApi = (pull_number) => {
  const [commentsCount, setCommentsCount] = useState();

  useEffect(() => {
    const octokit = new Octokit({
      auth: GITHUB_ACCESS_TOKEN,
    });

    const fetchIssueComments = async () => {
      const res = await octokit.request(
        `GET /repos/{owner}/{repo}/issues/{pull_number}/comments`,
        {
          owner: REPO_OWNER,
          repo: REPO_NAME,
          pull_number,
        }
      );
      return res.data.length;
    };

    const fetchReviewComments = async () => {
      const res = await octokit.request(
        `GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`,
        {
          owner: REPO_OWNER,
          repo: REPO_NAME,
          pull_number,
        }
      );
      return res.data.length;
    };

    fetchIssueComments().then((issueComments) => {
      fetchReviewComments().then((reviewComments) => {
        setCommentsCount(issueComments + reviewComments);
      });
    });
  }, [pull_number]);

  return { count: commentsCount };
};
