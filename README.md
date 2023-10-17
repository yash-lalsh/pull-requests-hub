# Pull Requests Hub

This project uses Github API to fetch pull requests and shows in a Grid list. It shows following information about Pull Request:

- Name of PR
- Author profile photo and name
- PR Number
- Number of Comments

To start the project, use below commands:

1. yarn install (or npm install)
2. yarn dev (or npm run dev)

Technologies used:

- React
- Tailwind CSS
- Vite (build system)

Notes:
As per Github docs, to get total number of comments for a PR, we need to fetch it from 2 endpoints:

- /repos/{owner}/{repo}/issues/{pull_number}/comments
- /repos/{owner}/{repo}/pulls/{pull_number}/comments.

This project shows total comments count (combined from both endpoints).
