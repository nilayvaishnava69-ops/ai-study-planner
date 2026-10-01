'use client';

import { useState } from 'react';
import TaskForm from './components/TaskForm';

const subjects = [
  { name: 'Data Structures', progress: 72 },
  { name: 'Database Management', progress: 58 },
  { name: 'Computer Networks', progress: 45 },
  { name: 'Operating Systems', progress: 64 },
];

const initialTasks = [
  {
    id: 1,
    title: 'Complete DSA practice',
    subject: 'Data Structures', 
    time: '10:00 AM',
  },
  {
    id: 2,
    title: 'Revise SQL joins',
    subject: 'Database Management',
    time: '1:00 PM',
  },
  {
    id: 3,
    title: 'Study TCP/IP basics',
    subject: 'Computer Networks',
    time: '4:00 PM',
  },
];

const deadlines = [
  { title: 'DBMS Assignment', date: 'Oct 5' },
  { title: 'DSA Lab Sheet', date: 'Oct 8' },
  { title: 'Networks Class Test', date: 'Oct 12' },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (task: {
  title: string;
  subject: string;
  time: string;
}) => {
  setTasks((current) => [
    ...current,
    {
      id: Date.now(),
      ...task,
    },
  ]);
};

  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setCompletedTasks((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId]
    );
  };

  const completedCount = completedTasks.length;
  const totalTasks = tasks.length;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            AI Study Planner
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your subjects, tasks, deadlines, and daily study plan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Subjects
            </h2>

            <div className="mt-5 space-y-5">
              {subjects.map((subject) => (
                <div key={subject.name}>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">
                      {subject.name}
                    </span>

                    <span className="text-sm text-gray-500">
                      {subject.progress}%
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Today's Tasks
              </h2>
              <TaskForm onAddTask={addTask} />

              <span className="text-sm font-medium text-gray-500">
                {completedCount}/{totalTasks} completed
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {tasks.map((task) => {
                const isCompleted = completedTasks.includes(task.id);

                return (
                  <label
                    key={task.id}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => toggleTask(task.id)}
                      className="mt-1 h-4 w-4"
                    />

                    <div className="flex-1">
  <p
    className={`font-medium ${
      isCompleted
        ? 'text-gray-400 line-through'
        : 'text-gray-900'
    }`}
  >
    {task.title}
  </p>

  <div className="mt-1 flex justify-between text-sm text-gray-500">
    <span>{task.subject}</span>
    <span>{task.time}</span>
  </div>
</div>

<button
  type="button"
  onClick={() => {
    setTasks((current) =>
      current.filter((item) => item.id !== task.id)
    );

    setCompletedTasks((current) =>
      current.filter((id) => id !== task.id)
    );
  }}
  aria-label={`Delete ${task.title}`}
  className="rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
>
  Delete
</button>
                  </label>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Upcoming Deadlines
            </h2>

            <div className="mt-5 space-y-4">
              {deadlines.map((deadline) => (
                <div
                  key={deadline.title}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                >
                  <span className="font-medium text-gray-900">
                    {deadline.title}
                  </span>

                  <span className="font-semibold text-red-600">
                    {deadline.date}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Daily Study Plan
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border-l-4 border-blue-600 bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">
                  9:00 AM – 10:30 AM
                </p>

                <p className="mt-1 text-gray-600">
                  Data Structures practice
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-green-600 bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">
                  1:00 PM – 2:00 PM
                </p>

                <p className="mt-1 text-gray-600">
                  Database Management revision
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-purple-600 bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">
                  4:00 PM – 5:00 PM
                </p>

                <p className="mt-1 text-gray-600">
                  Computer Networks study
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}