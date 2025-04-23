# mi-pagina-web-actions

# 🚀 Static Website with CI/CD Pipeline

A static website (HTML) with an automated CI/CD pipeline using GitHub Actions. Every time you push changes to `main`, the site deploys automatically to GitHub Pages!

![GitHub Actions](https://img.shields.io/github/actions/workflow/status/[Your-Username]/[Repo-Name]/.github/workflows/ci-cd.yml?label=Deploy%20to%20GitHub%20Pages)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)

## 🌐 Demo
Access the deployed site:  
https://[Your-Username].github.io/[Repo-Name]

## 🛠️ How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/[Your-Username]/[Repo-Name].git
   ```
2. **Modify the site**:
Edit the index.html file or add new files (CSS/JS).

3. **Push changes**:

```bash
git add .
git commit -m "My changes"
git push origin main
Done! Within 1-2 minutes, changes will be live on GitHub Pages.
```
## ⚙️ CI/CD Pipeline
The workflow (.github/workflows/ci-cd.yml) does the following:

  Triggers on push to main

  Automatically deploys to the gh-pages branch


**Window 2:**

```yaml
name: CI/CD Pipeline
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```
## 📁 Project Structure

.
├── .github/workflows
│   └── ci-cd.yml    # GitHub Actions config
├── index.html       # Main page
└── README.md        # This file


## 📄 License
This project is MIT licensed.

## ❓ Questions?
Open an issue or contact me on GitHub. 😊