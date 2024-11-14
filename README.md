
# Setting Up a New Angular Project from Template

After cloning your Angular template project, follow these steps to rename and configure it for a new application.

## 1. Rename Root Folder
Change the name of the root folder to reflect the new app’s name.

## 2. Update `package.json`  lock file too
In the `package.json` file:
- Update the `"name"` field to the new app’s name.
- Update the `"description"` field to describe the new app.

## 3. Update Angular Configuration Files
- **`angular.json`**: Under `"projects"`, replace instances of the template name with the new app name.
- **Environment Files**: In `src/environments`, modify any environment-specific values like API URLs if needed.

## 4. Set HTML Title
In **`src/index.html`**:
- Change the `<title>` tag to match the new app’s name so it appears correctly in the browser tab.

## 5. Update App Module and Main Components
In **`src/app/app.module.ts`**:
- Update any paths or settings that may be project-specific.

Check other main components or shared modules to replace any name references related to the original project.

## 6. Update README
In **`README.md`**:
- Update the title and description to reflect the new project’s purpose.

## 7. Configure Git Remote
If you're using a new Git repository, update the remote URL:

```bash
git remote set-url origin new-repo-url
```

Alternatively, reinitialize the Git repository by deleting the existing `.git` folder:

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit for new app"
git remote add origin new-repo-url
git push -u origin main
```

## 8. Update Project-Specific Configurations (Optional)
For environment variables, secrets, or deployment configurations (e.g., Docker or Kubernetes), adjust any project-specific settings.

---

After these updates, your new project will be ready with a unique identity and settings based on your template project.
