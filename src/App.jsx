import React, { useState, useEffect } from 'react';

const cssStyles = `
/* CSS Reset and Variables */
:root {
  --primary-color: #4f46e5;
  --primary-hover: #4338ca;
  --bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  --card-bg: #ffffff;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --border-color: #d1d5db;
  --error-color: #dc2626;
  --error-bg: #fef2f2;
  --success-color: #16a34a;
  --success-bg: #f0fdf4;
  --focus-ring: #a5b4fc;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: #f3f4f6;
  color: var(--text-main);
  min-height: 100vh;
}

.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Header Banner */
.header-banner {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-icon {
  background: #e0e7ff;
  color: var(--primary-color);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.header-title h1 {
  margin: 0 0 4px 0;
  font-size: 1.5rem;
  color: var(--text-main);
}

.header-title p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Main Grid Layout */
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr 340px;
  }
}

/* Settings Form Card */
.form-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card-heading {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Form Controls */
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #374151;
  display: flex;
  justify-content: space-between;
}

.required-star {
  color: var(--error-color);
}

.form-input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: #fff;
  color: #111827;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.form-input.input-error {
  border-color: var(--error-color);
  background-color: #fff5f5;
}

.form-input.input-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
}

/* Error Message */
.error-message {
  color: var(--error-color);
  font-size: 0.85rem;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
}

/* Success Banner */
.success-banner {
  background-color: var(--success-bg);
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  padding: 14px 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #15803d;
}

.success-banner-icon {
  font-size: 1.25rem;
}

/* Action Buttons */
.button-group {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.4);
}

.btn-secondary {
  background-color: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.btn-secondary:hover {
  background-color: #e5e7eb;
}

/* Side Card / Preview */
.side-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: fit-content;
}

.preview-badge {
  background-color: #e0e7ff;
  color: var(--primary-color);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
}

.saved-profile-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.saved-profile-item {
  padding: 12px 0;
  border-bottom: 1px dashed #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.saved-profile-item:last-child {
  border-bottom: none;
}

.saved-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.saved-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  word-break: break-all;
}

/* Testing Simulation Suite */
.test-suite-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 12px;
}

.test-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.test-item {
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
}

.test-pass {
  color: var(--success-color);
  font-weight: 600;
}

.test-fail {
  color: var(--error-color);
  font-weight: 600;
}

.help-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
}
`;

export default function App() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    studyHours: '6',
  });

  // Errors state map
  const [errors, setErrors] = useState({});

  // Saved state (simulating persistence)
  const [savedData, setSavedData] = useState({
    fullName: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    studyHours: '6',
  });

  // Submission success status state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Test suite execution state
  const [testResults, setTestResults] = useState(null);
  const [isRunningTests, setIsRunningTests] = useState(false);

  const validate = (data = formData) => {
    const newErrors = {};

    // 1. Full Name Validation: Required, 2-50 characters
    if (!data.fullName || !data.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    } else if (data.fullName.trim().length > 50) {
      newErrors.fullName = 'Name cannot exceed 50 characters';
    }

    // 2. Email Validation: Required, valid email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // 3. Daily Study Hours Validation: Required, number between 1 and 12
    const hoursNum = Number(data.studyHours);
    if (data.studyHours === '' || data.studyHours === null || data.studyHours === undefined) {
      newErrors.studyHours = 'Daily study hours is required';
    } else if (isNaN(hoursNum) || hoursNum < 1 || hoursNum > 12) {
      newErrors.studyHours = 'Study hours must be between 1 and 12';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Live validation if there's already an active error for this field
    if (errors[name]) {
      const fieldErrors = validate(updatedData);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name] || '',
      }));
    }

    // Clear success banner when user edits the form
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setSavedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ ...savedData });
    setErrors({});
    setIsSubmitted(false);
  };

  const runAutomatedTests = () => {
    setIsRunningTests(true);
    setTimeout(() => {
      const results = [];

      // Test 1: Empty Required Fields Validation
      const emptyCheck = validate({ fullName: '', email: '', studyHours: '' });
      const test1Passed =
        emptyCheck.fullName === 'Full Name is required' &&
        emptyCheck.email === 'Email is required' &&
        emptyCheck.studyHours === 'Daily study hours is required';
      results.push({
        id: 1,
        name: 'Required-field validation',
        passed: test1Passed,
        detail: test1Passed
          ? 'Passed: Triggered expected error messages for empty fields.'
          : 'Failed to report required fields correctly.',
      });

      // Test 2: Invalid Email Validation
      const emailCheck = validate({ fullName: 'Valid Name', email: 'abc', studyHours: '5' });
      const test2Passed = emailCheck.email === 'Please enter a valid email address';
      results.push({
        id: 2,
        name: 'Invalid email format validation',
        passed: test2Passed,
        detail: test2Passed
          ? 'Passed: "abc" successfully caught as invalid email format.'
          : 'Failed: Invalid email accepted.',
      });

      // Test 3: Study Hours Range Validation (out of range: 15)
      const hoursCheckHigh = validate({ fullName: 'Valid Name', email: 'test@example.com', studyHours: '15' });
      const hoursCheckLow = validate({ fullName: 'Valid Name', email: 'test@example.com', studyHours: '0' });
      const test3Passed =
        hoursCheckHigh.studyHours === 'Study hours must be between 1 and 12' &&
        hoursCheckLow.studyHours === 'Study hours must be between 1 and 12';
      results.push({
        id: 3,
        name: 'Study-hours range validation (1-12)',
        passed: test3Passed,
        detail: test3Passed
          ? 'Passed: Out-of-bounds hours (0, 15) rejected with clear range error.'
          : 'Failed: Invalid hours range accepted.',
      });

      // Test 4: Successful Submission
      const validCheck = validate({ fullName: 'Sarah Connor', email: 'sarah@skynet.org', studyHours: '8' });
      const test4Passed = Object.keys(validCheck).length === 0;
      results.push({
        id: 4,
        name: 'Successful valid submission validation',
        passed: test4Passed,
        detail: test4Passed
          ? 'Passed: Zero errors detected for valid inputs.'
          : 'Failed: Errors raised on valid input.',
      });

      setTestResults(results);
      setIsRunningTests(false);
    }, 400);
  };

  return (
    <>
      <style>{cssStyles}</style>

      <div className="app-container">
        {/* Header Section */}
        <header className="header-banner">
          <div className="header-icon" aria-hidden="true">
            📚
          </div>
          <div className="header-title">
            <h1>AI Study Planner</h1>
            <p>Student Settings & Preferences</p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="main-grid">
          {/* Settings Form Card */}
          <main className="form-card">
            <h2 className="card-heading">
              <span>Student Profile Settings</span>
            </h2>

            {/* Success Notification Message */}
            {isSubmitted && (
              <div className="success-banner" role="alert" aria-live="polite">
                <span className="success-banner-icon" aria-hidden="true">
                  ✅
                </span>
                <div>
                  <strong>Settings saved successfully!</strong>
                  <div style={{ fontSize: '0.85rem' }}>Your study targets have been updated.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Field 1: Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  <span>
                    Full Name <span className="required-star">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                  required
                />
                <span className="help-text">2 to 50 characters required</span>
                {errors.fullName && (
                  <div id="fullName-error" className="error-message" role="alert">
                    ⚠️ {errors.fullName}
                  </div>
                )}
              </div>

              {/* Field 2: Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span>
                    Email Address <span className="required-star">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  required
                />
                {errors.email && (
                  <div id="email-error" className="error-message" role="alert">
                    ⚠️ {errors.email}
                  </div>
                )}
              </div>

              {/* Field 3: Daily Study Hours */}
              <div className="form-group">
                <label htmlFor="studyHours" className="form-label">
                  <span>
                    Daily Study Hours <span className="required-star">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  id="studyHours"
                  name="studyHours"
                  min="1"
                  max="12"
                  value={formData.studyHours}
                  onChange={handleChange}
                  placeholder="e.g. 6"
                  aria-invalid={errors.studyHours ? 'true' : 'false'}
                  aria-describedby={errors.studyHours ? 'studyHours-error' : undefined}
                  className={`form-input ${errors.studyHours ? 'input-error' : ''}`}
                  required
                />
                <span className="help-text">Allowed range: 1 to 12 hours per day</span>
                {errors.studyHours && (
                  <div id="studyHours-error" className="error-message" role="alert">
                    ⚠️ {errors.studyHours}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="button-group">
                <button type="submit" className="btn-primary">
                  💾 Save Settings
                </button>
                <button type="button" className="btn-secondary" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </form>
          </main>

          {/* Active Profile Preview Panel */}
          <aside className="side-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Active Profile</h3>
              <span className="preview-badge">Live</span>
            </div>

            <ul className="saved-profile-list">
              <li className="saved-profile-item">
                <span className="saved-label">Student Name</span>
                <span className="saved-value">{savedData.fullName || '—'}</span>
              </li>
              <li className="saved-profile-item">
                <span className="saved-label">Email Address</span>
                <span className="saved-value">{savedData.email || '—'}</span>
              </li>
              <li className="saved-profile-item">
                <span className="saved-label">Daily Goal</span>
                <span className="saved-value">{savedData.studyHours ? `${savedData.studyHours} hours/day` : '—'}</span>
              </li>
            </ul>
          </aside>
        </div>

        {/* Verification Test Runner Section */}
        <section className="test-suite-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Verification Test Suite (Vitest Simulation)</h3>
              <p className="help-text" style={{ margin: '4px 0 0 0' }}>
                Runs unit checks for required fields, email formatting, range bounds, and valid submission.
              </p>
            </div>
            <button type="button" className="btn-primary" onClick={runAutomatedTests} disabled={isRunningTests}>
              {isRunningTests ? 'Running Tests...' : '🧪 Run Automated Verification Tests'}
            </button>
          </div>

          {testResults && (
            <div className="test-list">
              {testResults.map((test) => (
                <div key={test.id} className="test-item">
                  <div>
                    <strong>Test {test.id}:</strong> {test.name}
                    <div className="help-text">{test.detail}</div>
                  </div>
                  <span className={test.passed ? 'test-pass' : 'test-fail'}>
                    {test.passed ? 'PASSED ✅' : 'FAILED ❌'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}