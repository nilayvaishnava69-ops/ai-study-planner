'use client';

import {
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    setActiveTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const currentTab = tabs[activeTab];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Example tabs"
        className="flex border-b border-gray-300"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`${tab.id}-tab`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`border-b-2 px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${currentTab.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${currentTab.id}-tab`}
        tabIndex={0}
        className="mt-4 rounded-lg border border-gray-200 p-4"
      >
        {currentTab.content}
      </div>
    </div>
  );
}