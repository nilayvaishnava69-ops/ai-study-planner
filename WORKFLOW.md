# AI Development Workflow Comparison

## Overview

This experiment implemented the same Student Settings Form feature twice using ChatGPT. Round 1 used a deliberately vague prompt, while Round 2 used a detailed specification containing file references, constraints, examples, accessibility requirements, and verification instructions.

## Round 1: Vague Prompt

The Round 1 prompt was only: "Build a student settings form for my AI Study Planner project." The generated result was much broader than required and assumed technologies and styling choices that were not specified. The implementation used React components with Tailwind-style utility classes, although Tailwind had not been configured in the project. When the application was run, the interface functionality appeared but much of the intended styling was not applied.

This shows a correctness problem caused by missing context. The AI had to make assumptions about the technology and project environment.

## Round 2: Precise Prompt

The Round 2 prompt explicitly required React with Vite, plain CSS, three specific fields, validation rules, responsive behavior, accessibility requirements, examples, and automated testing. The resulting form followed the specified validation behavior and included associated labels and ARIA attributes.

However, verification caught an AI mistake. The prompt requested Vitest and React Testing Library tests, but the initial generated application contained an in-page "Verification Test Suite" simulation instead of real automated tests. Real tests were added and initially produced 3 failures. The failures were caused by exact text assertions not matching messages that also contained an emoji. After changing the assertions to flexible text matching, all 4 tests passed.

## Comparison

The Git diff between `round-one-vague` and `round-two-precise` showed 6 changed files, with 1,839 insertions and 856 deletions. Round 2 added an actual test file, test setup, and Vitest configuration. These are concrete differences rather than subjective impressions.

Accessibility was also more explicit in Round 2 because the implementation used labels associated with inputs and ARIA attributes for validation feedback.

The precise workflow required more initial specification and verification, but it reduced ambiguity and made the expected behavior testable. Review was still necessary because the AI did not completely follow the testing requirement.

## Lessons

AI output should not be accepted without verification. Precise prompts reduce assumptions, but even detailed prompts can produce incorrect or incomplete implementations. A reliable workflow is:

1. Define the requirements.
2. Reference the relevant files.
3. Specify constraints and examples.
4. Ask for tests and verification.
5. Run the application and tests.
6. Inspect and correct AI mistakes.