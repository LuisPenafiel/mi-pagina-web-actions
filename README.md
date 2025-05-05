Mi-pagina-web-actions

## 🚀 Overview: Static Website with CI/CD Pipeline

This project is a simple static website built with HTML, featuring an automated CI/CD pipeline using GitHub Actions. It serves as a learning playground to practice CI/CD workflows for a junior DevOps engineer. Every time changes are pushed to the `main` branch, the site is automatically deployed to GitHub Pages.

### Features

- A basic static website (`index.html`) hosted on GitHub Pages.
- Automated CI/CD pipelines using GitHub Actions for validation, deployment, preview, and cleanup.
- A 7-day plan to simulate typical junior DevOps tasks with GitHub Actions.

## 🌐 Demo

Access the deployed site:\
https://LuisPenafiel.github.io/mi-pagina-web-actions

## 🛠️ How to Use

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LuisPenafiel/mi-pagina-web-actions.git
   ```

2. **Modify the site**:

   - Edit the `index.html` file or add new files (e.g., CSS or JS) to customize the site.

3. **Push changes**:

   ```bash
   git add .
   git commit -m "My changes"
   git push origin main
   ```

   Done! Within 1-2 minutes, your changes will be live on GitHub Pages.

## ⚙️ CI/CD Pipelines

This project includes several GitHub Actions workflows to automate common DevOps tasks:

- **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`):
  - Triggers on push to `main` or `staging`.
  - Automatically deploys the site to the `gh-pages` branch for hosting on GitHub Pages.
- **HTML Validation** (`.github/workflows/validate-html.yml`):
  - Validates the `index.html` file for errors on every push to `main`.
- **Manual Preview** (`.github/workflows/preview.yml`):
  - Allows manual preview of the site content before deployment.
- **Daily Cleanup** (`.github/workflows/cleanup.yml`):
  - Scheduled to run daily, cleaning up temporary files.
- **PR Validation** (`.github/workflows/pr-validation.yml`):
  - Validates changes in pull requests before merging to `main`.

## 📁 Project Structure

```
mi-pagina-web-actions/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml         # Deployment pipeline
│       ├── validate-html.yml # HTML validation pipeline
│       ├── preview.yml       # Manual preview pipeline
│       ├── cleanup.yml       # Daily cleanup pipeline
│       └── pr-validation.yml # PR validation pipeline
├── index.html                # Main page of the static site
└── README.md                 # Project documentation
```

## 📄 License

This project is licensed under the MIT License.

## ❓ Questions?

If you have any questions, feel free to open an issue or contact me on GitHub! 😊

---

## 📅 7-Day CI/CD Learning Plan

This section logs the tasks completed each day as part of a 7-day plan to practice CI/CD workflows with GitHub Actions. It serves as a reference for future review and learning.

| Day | Task | Description | Purpose |
| --- | --- | --- | --- |
| **Day 1** | Add HTML Validation | Created a workflow (`validate-html.yml`) to validate `index.html` on every push to `main` using HTMLHint. | Learn how to set up automated code validation in CI/CD to ensure quality. |
| **Day 2** | Add Failure Notification | Updated `ci-cd.yml` to send a notification (comment on the commit) if the deployment fails. | Practice monitoring and alerting in CI/CD pipelines by notifying on failures. |
| **Day 3** | Add Manual Preview Workflow | Created a manual workflow (`preview.yml`) to preview the site content before deployment, triggered with `workflow_dispatch`. | Simulate a review process by previewing changes manually, a common DevOps task. |
| **Day 4** | Set Up a Staging Environment | Modified `ci-cd.yml` to deploy changes to a `staging` branch in a subdirectory (`/staging`) on GitHub Pages. | Learn how to create staging environments for testing changes before production. |
| **Day 5** | Add Scheduled Cleanup | Created a scheduled workflow (`cleanup.yml`) to run daily, creating and deleting a temporary file (`temp.txt`). | Practice automating maintenance tasks with scheduled workflows. |
| **Day 6** | Add Conditional Workflow Trigger | Updated `ci-cd.yml` to only trigger if `index.html` changes, using the `paths` filter. | Optimize CI/CD pipelines by running them only when necessary, saving resources. |
| **Day 7** | Add Pull Request Validation | Created a workflow (`pr-validation.yml`) to validate `index.html` in pull requests before merging to `main`. | Simulate a code review process by validating changes in PRs, ensuring quality. |

This plan helped me practice key CI/CD concepts like validation, deployment, monitoring, optimization, and review processes, preparing me for a junior DevOps role.