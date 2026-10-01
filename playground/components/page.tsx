'use client';

import { useState } from 'react';
import Modal from './components/Modal';
import Tabs from './components/Tabs';
import Disclosure from './components/Disclosure';

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <p>
          This is the overview panel for the AI Study Planner.
        </p>
      ),
    },
    {
      id: 'schedule',
      label: 'Schedule',
      content: (
        <p>
          This panel contains your study schedule information.
        </p>
      ),
    },
    {
      id: 'progress',
      label: 'Progress',
      content: (
        <p>
          This panel contains your academic progress information.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-5xl space-y-10 px-6 py-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Accessible Component Playground
          </h1>

          <p className="mt-3 text-gray-600">
            Keyboard-test the manually built Modal, Tabs, and
            Disclosure components.
          </p>
        </div>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Modal
          </h2>

          <p className="mt-2 text-gray-600">
            Open the dialog and test Tab, Shift + Tab, and Escape.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Open Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Study Planner Settings"
          >
            <p>
              Use Tab and Shift + Tab to move between controls.
              Press Escape to close the dialog.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-4 rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close Modal
            </button>
          </Modal>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Tabs
          </h2>

          <Tabs tabs={tabs} />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Disclosure
          </h2>

          <Disclosure title="What does keyboard accessibility mean?">
            <p>
              A keyboard-accessible component can be operated
              without using a mouse or other pointing device.
            </p>
          </Disclosure>
        </section>
      </section>
    </main>
  );
}