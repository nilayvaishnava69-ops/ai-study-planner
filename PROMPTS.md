# AI Development Prompts

## Round 1 — Vague Prompt

The first implementation intentionally used a deliberately vague prompt to observe how an AI assistant would make assumptions when given minimal context.

Prompt:

> Build a student settings form for my AI Study Planner project.

This prompt intentionally did not specify the technology stack, file structure, validation rules, styling system, accessibility requirements, or testing approach.

## Round 2 — Precise Prompt

The second implementation used a fresh ChatGPT conversation and a detailed specification.

Prompt:

> Build the same student settings form feature for my existing AI Study Planner project, but follow the specification below exactly.
>
> Project context:
> - This is a beginner-level student project.
> - Use React with Vite.
> - Do not use Tailwind CSS.
> - Use plain CSS in a separate src/App.css file.
> - Keep the implementation simple and easy for a beginner to understand.
>
> Files:
> - Create/update index.html
> - Create/update src/main.jsx
> - Create/update src/App.jsx
> - Create src/App.css
> - Update package.json only when required
> - Do not modify README.md, LICENSE, .gitignore, or CLAUDE.md
>
> Feature requirements:
> 1. Create a Student Settings form.
> 2. Include these fields:
>    - Full Name: required, 2–50 characters
>    - Email: required, valid email format
>    - Daily Study Hours: required number from 1 to 12
> 3. Add a Save Settings button.
> 4. Validate all fields when the user submits the form.
> 5. Show clear inline validation messages next to invalid fields.
> 6. Show a visible success message after valid submission.
> 7. Do not use browser alert().
> 8. Every input must have an associated label.
> 9. The form must be usable with keyboard navigation.
> 10. Keep the layout responsive and readable on desktop and mobile.
> 11. Do not add unnecessary dependencies or libraries.
>
> Example behavior:
> - Empty name → show "Name is required"
> - Email "abc" → show an email validation message
> - Study hours "15" → show "Study hours must be between 1 and 12"
> - Valid values → show "Settings saved successfully"
>
> Verification:
> - After implementing the feature, add tests for:
>   1. required-field validation
>   2. invalid email
>   3. study-hours range validation
>   4. successful submission
> - Use a standard React testing setup such as Vitest and React Testing Library.
> - Run the tests and report the result.
> - If a test fails, fix the implementation and run the tests again.
> - At the end, summarize the files changed and the verification performed.

## Development Lesson

The first prompt gave the AI freedom to make assumptions. The second prompt reduced ambiguity by specifying the technology, files, constraints, expected behavior, accessibility requirements, examples, and verification process.