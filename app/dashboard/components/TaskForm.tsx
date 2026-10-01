'use client';

import { useState } from 'react';

type TaskFormProps = {
  onAddTask: (task: {
    title: string;
    subject: string;
    time: string;
  }) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !subject.trim() || !time) {
      return;
    }

    onAddTask({
      title: title.trim(),
      subject: subject.trim(),
      time,
    });

    setTitle('');
    setSubject('');
    setTime('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4"
    >
      <div>
        <label
          htmlFor="task-title"
          className="block text-sm font-medium text-gray-700"
        >
          Task
        </label>

        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Complete DSA practice"
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="task-subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>

        <input
          id="task-subject"
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="e.g. Data Structures"
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="task-time"
          className="block text-sm font-medium text-gray-700"
        >
          Time
        </label>

        <input
          id="task-time"
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </form>
  );
}
