'use client';

import { useState } from 'react';

import Modal from './components/Modal';
import Tabs from './components/Tabs';
import Disclosure from './components/Disclosure';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Tabs as ShadcnTabs,
  TabsContent as ShadcnTabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from '@/components/ui/tabs';

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const manualTabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <p>This is the manual Tabs overview panel.</p>
      ),
    },
    {
      id: 'schedule',
      label: 'Schedule',
      content: (
        <p>This is the manual Tabs schedule panel.</p>
      ),
    },
    {
      id: 'progress',
      label: 'Progress',
      content: (
        <p>This is the manual Tabs progress panel.</p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Accessible Component Playground
          </h1>

          <p className="mt-3 text-gray-600">
            Compare manually built components with shadcn/ui components.
          </p>
        </div>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Manual Modal
          </h2>

          <p className="mt-2 text-gray-600">
            Custom React implementation with explicit focus management.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Open Manual Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Manual Modal"
          >
            <p>
              This dialog is implemented manually using React hooks,
              refs, keyboard events, and ARIA attributes.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-4 rounded-lg border border-gray-300 px-4 py-2"
            >
              Close Modal
            </button>
          </Modal>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            shadcn Dialog
          </h2>

          <p className="mt-2 text-gray-600">
            Generated Dialog using the shadcn Base UI implementation.
          </p>

          <div className="mt-4">
            <Dialog>
              <DialogTrigger render={<Button />}>
                Open shadcn Dialog
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>shadcn Dialog</DialogTitle>

                  <DialogDescription>
                    This dialog uses the generated shadcn component,
                    which delegates behavior to Base UI.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Manual Tabs
          </h2>

          <Tabs tabs={manualTabs} />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            shadcn Tabs
          </h2>

          <ShadcnTabs defaultValue="overview" className="w-full">
            <ShadcnTabsList>
              <ShadcnTabsTrigger value="overview">
                Overview
              </ShadcnTabsTrigger>

              <ShadcnTabsTrigger value="schedule">
                Schedule
              </ShadcnTabsTrigger>

              <ShadcnTabsTrigger value="progress">
                Progress
              </ShadcnTabsTrigger>
            </ShadcnTabsList>

            <ShadcnTabsContent value="overview" className="mt-4">
              shadcn overview panel.
            </ShadcnTabsContent>

            <ShadcnTabsContent value="schedule" className="mt-4">
              shadcn schedule panel.
            </ShadcnTabsContent>

            <ShadcnTabsContent value="progress" className="mt-4">
              shadcn progress panel.
            </ShadcnTabsContent>
          </ShadcnTabs>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Manual Disclosure
          </h2>

          <Disclosure title="What is keyboard accessibility?">
            <p>
              Keyboard accessibility means the component can be
              operated without a mouse.
            </p>
          </Disclosure>
        </section>
      </section>
    </main>
  );
}