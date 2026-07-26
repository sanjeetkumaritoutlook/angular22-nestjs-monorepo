# Contributing

Thank you for your interest in contributing!

We welcome bug reports, feature requests, documentation improvements, and code contributions.

---

# Getting Started

## 1. Fork the Repository

Click **Fork** on GitHub.

---

## 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/<repository>.git
```

---

## 3. Install Dependencies

```bash
npm install
```

If using a monorepo:

```bash
cd frontend
npm install

cd ../server
npm install
```

---

## 4. Create a Branch

```bash
git checkout -b feature/my-new-feature
```

Examples:

```
feature/login-page

fix/navbar-overflow

docs/update-readme

refactor/auth-service
```

---

# Development

Run the application.

Frontend:

```bash
npm run start
```

Backend:

```bash
npm run start:dev
```

---

# Coding Guidelines

Please:

- Follow existing code style
- Write clean, readable code
- Keep functions small
- Avoid unnecessary dependencies
- Add comments only when they improve understanding

---

# Commit Messages

Use Conventional Commits.

Examples:

```text
feat: add login page

fix: resolve API timeout

docs: update README

refactor: simplify authentication

test: add Playwright tests

ci: update GitHub Actions
```

---

# Pull Requests

Before submitting a PR, ensure:

- [ ] Project builds successfully
- [ ] Tests pass
- [ ] Lint passes
- [ ] Documentation updated (if required)
- [ ] No sensitive information committed

Use the Pull Request template provided in this repository.

---

# Reporting Bugs

Please use the Bug Report issue template.

Include:

- Steps to reproduce
- Expected behaviour
- Actual behaviour
- Environment details

---

# Feature Requests

Please use the Feature Request template.

Describe:

- The problem
- Your proposed solution
- Any alternatives considered

---

# Code Review

All contributions are reviewed before merging.

Reviewers may request:

- Code improvements
- Additional tests
- Documentation updates

Please respond constructively to review comments.

---

# Code of Conduct

Please be respectful and professional in all interactions.

We aim to create a welcoming environment for everyone.

---

# Thank You

Thank you for contributing!