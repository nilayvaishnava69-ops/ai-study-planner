# Project Instructions

## Project

AI Study Planner is a student productivity application designed to help
students organize academic tasks, manage study plans, and track progress.

## Technology Stack

- React
- Vite
- JavaScript
- Plain CSS
- Git
- GitHub

## Project-Specific Rules

### 1. React and Styling

All UI features must use React with Vite and plain CSS.

Do not introduce Tailwind CSS or another CSS framework unless the project
requirements explicitly change.

For reusable styling, use a separate CSS file rather than embedding a large
CSS string directly inside a React component.

### 2. Form Validation

Every user-facing form must validate required fields and documented input
ranges before successful submission.

Validation errors must be visible to the user and associated with the
corresponding form controls.

All form inputs must have explicit labels.

### 3. Automated Testing

Important form behavior must have real automated tests using Vitest and
React Testing Library.

Do not treat an in-page test simulation or manually displayed test results
as a replacement for automated tests.

At minimum, tests should cover required fields, invalid input, boundary or
range conditions, and successful submission when those behaviors exist.

### 4. Accessibility

Interactive form controls must be keyboard accessible.

Validation feedback should use appropriate accessible attributes such as
aria-invalid and aria-describedby when applicable.

### 5. Verification

After implementing a feature:

1. Run the application.
2. Test the important user flows manually.
3. Run the automated test suite.
4. Fix failures before considering the feature complete.

## Documentation Conventions

- Keep README.md updated when project behavior changes.
- Use clear Markdown headings.
- Keep installation and running instructions accurate.
- Document important project decisions.

## Git Conventions

Use Conventional Commits.

Examples:

- `feat: add task creation`
- `fix: correct form validation`
- `docs: update readme`
- `chore: update project configuration`

## AI Development Workflow

Before making a major change:

1. Inspect the existing project structure.
2. Identify the relevant files.
3. State the implementation plan.
4. Make the smallest reasonable change.
5. Verify the result with tests and manual checks.

The three most important learned rules
1. React + Vite + plain CSS
             ↓
No unrequested styling framework

2. Forms require real validation + labels
             ↓
Correct behavior + accessibility

3. Real Vitest/React Testing Library tests
             ↓
No fake in-page test simulations