import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Bot, 
  Bell, 
  Database, 
  Moon, 
  Sun, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  Flame, 
  Clock, 
  Target, 
  Sparkles, 
  Calendar, 
  Download, 
  Trash2, 
  Zap, 
  ShieldAlert, 
  Volume2, 
  Check, 
  Sliders,
  GraduationCap,
  Briefcase,
  Layers,
  Brain,
  HelpCircle,
  Smartphone,
  Mail,
  RefreshCw
} from 'lucide-react';

const DEFAULT_SETTINGS = {
  // Academic Profile
  academicLevel: 'Undergraduate',
  majorStream: 'Computer Science & Engineering',
  targetDate: '2026-12-15',
  targetScore: '3.8 GPA',
  learningStyle: 'Visual',

  // Study Preferences
  dailyTargetHours: 4.5,
  studyBlockType: '50m Focus',
  customBlockMinutes: 50,
  peakProductivity: 'Night',
  restDays: ['Sunday'],
  maxDifficulty: 'Challenging',

  // AI Tutor & Planner
  aiTone: 'Encouraging & Friendly',
  aiVoice: 'Aria (Warm & Supportive)',
  autoReschedule: true,
  workloadIntensity: 'Balanced',
  aiContextRetention: 'High (30 Days Memory)',

  // Notifications
  sessionReminders: true,
  dailyBriefing: true,
  spacedRepetitionAlerts: true,
  examCountdown: true,
  dndEnabled: true,
  dndStart: '23:00',
  dndEnd: '07:00',

  // Data & Theme
  darkMode: true,
  calendarSync: 'Google Calendar',
  dataSharing: false,
};

export default function App() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState('academic');
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle' | 'saving' | 'saved'
  const [showResetModal, setShowResetModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle dark mode toggle on the html container
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleRestDay = (day) => {
    setSettings((prev) => {
      const current = prev.restDays;
      const updated = current.includes(day)
        ? current.filter((d) => d !== day)
        : [...current, day];
      return { ...prev, restDays: updated };
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      showToast('Settings saved successfully!');
      setTimeout(() => {
        setSaveStatus('idle');
      }, 2500);
    }, 1000);
  };

  const handleResetDefaults = () => {
    setSettings(DEFAULT_SETTINGS);
    setShowResetModal(false);
    showToast('Reset all settings to default values.');
  };

  const tabs = [
    { id: 'academic', label: 'Academic Profile', icon: GraduationCap },
    { id: 'preferences', label: 'Study Preferences', icon: Sliders },
    { id: 'ai', label: 'AI Tutor & Planner', icon: Bot },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'data', label: 'Data & Sync', icon: Database },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${settings.darkMode ? 'bg-slate-950 text-slate-100 dark' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-xl animate-bounce border border-emerald-400/30 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5" />
          {toastMessage}
        </div>
      )}

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-xl text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                StudyMind AI
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Student Configuration & AI Personalization</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => handleChange('darkMode', !settings.darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm"
              title="Toggle Theme"
            >
              {settings.darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            {/* Reset Button */}
            <button
              onClick={() => setShowResetModal(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Defaults
            </button>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 shadow-md shadow-indigo-500/20 transition-all disabled:opacity-50"
            >
              {saveStatus === 'saving' ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : saveStatus === 'saved' ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Settings
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Navigation Tabs & Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Stats Pill */}
            <div className="p-4 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10 border border-indigo-200/50 dark:border-indigo-800/30 rounded-2xl">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                Study Streak Ready
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Your target is set to <span className="font-bold text-slate-800 dark:text-slate-200">{settings.dailyTargetHours} hours/day</span> using <span className="font-bold text-slate-800 dark:text-slate-200">{settings.studyBlockType}</span> blocks.
              </p>
            </div>
          </div>

          {/* Center Main Tab Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* TAB 1: ACADEMIC PROFILE */}
            {activeTab === 'academic' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                    Academic Profile
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Help your AI tutor tailor explanations and study schedules to your specific field and grade.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Academic Level */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Academic Level / Goal
                    </label>
                    <select
                      value={settings.academicLevel}
                      onChange={(e) => handleChange('academicLevel', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                    >
                      <option value="High School">High School (Grade 9-12)</option>
                      <option value="Undergraduate">Undergraduate (College / University)</option>
                      <option value="Master's / PostGrad">Master's / PostGrad</option>
                      <option value="Competitive: JEE / NEET">Competitive Exam: JEE / NEET</option>
                      <option value="Competitive: GATE / ESE">Competitive Exam: GATE / ESE</option>
                      <option value="Competitive: GRE / GMAT / SAT">Competitive Exam: GRE / GMAT / SAT</option>
                      <option value="Self-Learner / Professional">Self-Learner / Professional</option>
                    </select>
                  </div>

                  {/* Major / Stream */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Major / Course Stream
                    </label>
                    <input
                      type="text"
                      value={settings.majorStream}
                      onChange={(e) => handleChange('majorStream', e.target.value)}
                      placeholder="e.g. Computer Science, Pre-Med, Electrical Eng."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Target Exam Date & Target Score in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Target Exam / Term End
                      </label>
                      <input
                        type="date"
                        value={settings.targetDate}
                        onChange={(e) => handleChange('targetDate', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Target GPA / Score
                      </label>
                      <input
                        type="text"
                        value={settings.targetScore}
                        onChange={(e) => handleChange('targetScore', e.target.value)}
                        placeholder="e.g. 3.9 GPA or 320 GRE"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Learning Style Chip Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Preferred Learning Style
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'Visual', desc: 'Diagrams & Flowcharts' },
                        { id: 'Auditory', desc: 'Voice Explanations' },
                        { id: 'Active Practice', desc: 'Quizzes & Problems' },
                        { id: 'Reading/Writing', desc: 'Detailed Notes & Summaries' },
                      ].map((style) => (
                        <button
                          key={style.id}
                          type="button"
                          onClick={() => handleChange('learningStyle', style.id)}
                          className={`p-3 text-left rounded-xl border text-xs transition-all ${
                            settings.learningStyle === style.id
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 font-semibold shadow-sm'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <div className="font-semibold">{style.id}</div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{style.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: STUDY PREFERENCES & GOALS */}
            {activeTab === 'preferences' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-indigo-500" />
                    Study Preferences & Goals
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Configure your pacing, focus blocks, and daily study capacity.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Daily Target Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Daily Study Target
                      </label>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg">
                        {settings.dailyTargetHours} Hours / Day
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      step="0.5"
                      value={settings.dailyTargetHours}
                      onChange={(e) => handleChange('dailyTargetHours', parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>1h (Casual)</span>
                      <span>6h (Intense)</span>
                      <span>12h (Marathon)</span>
                    </div>
                  </div>

                  {/* Preferred Focus Block */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Focus Block Duration
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['25m Pomodoro', '50m Focus', '90m Deep Work'].map((block) => (
                        <button
                          key={block}
                          type="button"
                          onClick={() => handleChange('studyBlockType', block)}
                          className={`py-2.5 px-3 text-center rounded-xl text-xs font-medium border transition-all ${
                            settings.studyBlockType === block
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-semibold'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {block}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Peak Productivity Time */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Peak Productivity Hours
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'Morning', label: 'Morning', time: '6am - 12pm' },
                        { id: 'Afternoon', label: 'Afternoon', time: '12pm - 5pm' },
                        { id: 'Evening', label: 'Evening', time: '5pm - 10pm' },
                        { id: 'Night', label: 'Night Owl', time: '10pm - 3am' },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleChange('peakProductivity', p.id)}
                          className={`p-2.5 text-center rounded-xl border text-xs transition-all ${
                            settings.peakProductivity === p.id
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-semibold'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <div>{p.label}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{p.time}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rest Days Multi-Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Rest / Light Study Days
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
                        const isSelected = settings.restDays.includes(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => handleToggleRestDay(day)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400'
                                : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            {day.slice(0, 3)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: AI TUTOR & PLANNER */}
            {activeTab === 'ai' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Bot className="w-5 h-5 text-indigo-500" />
                    AI Tutor & Planner Customization
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Shape the personality, tone, and scheduling aggressiveness of your AI study assistant.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* AI Persona Tone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      AI Tutor Personality & Tone
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        {
                          title: 'Encouraging & Friendly',
                          desc: 'Positive reinforcement, empathetic check-ins, and supportive guidance.',
                          icon: '😊',
                        },
                        {
                          title: 'Strict & Discipline-Focused',
                          desc: 'Direct accountability, minimal fluff, holds you accountable to every goal.',
                          icon: '🎯',
                        },
                        {
                          title: 'Concise & Direct',
                          desc: 'Bullet-point answers, instant explanations, and quick action steps.',
                          icon: '⚡',
                        },
                        {
                          title: 'Socratic & Questioning',
                          desc: 'Guides you to answers by asking probing questions to test deep recall.',
                          icon: '🤔',
                        },
                      ].map((persona) => (
                        <div
                          key={persona.title}
                          onClick={() => handleChange('aiTone', persona.title)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            settings.aiTone === persona.title
                              ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 shadow-sm'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                          }`}
                        >
                          <span className="text-2xl">{persona.icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                                {persona.title}
                              </span>
                              {settings.aiTone === persona.title && (
                                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {persona.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Workload Balancing Intensity */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Workload Balancing Intensity
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { level: 'Gentle', desc: 'Spreads tasks evenly' },
                        { level: 'Balanced', desc: 'Standard optimal pace' },
                        { level: 'Aggressive', desc: 'Frontloads upcoming exams' },
                      ].map((item) => (
                        <button
                          key={item.level}
                          type="button"
                          onClick={() => handleChange('workloadIntensity', item.level)}
                          className={`p-3 text-left rounded-xl border transition-all ${
                            settings.workloadIntensity === item.level
                              ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 font-semibold'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <div className="text-xs font-semibold">{item.level}</div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Auto Reschedule Toggle */}
                  <div className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-800/30">
                    <div>
                      <div className="text-sm font-semibold">Auto-Reschedule Missed Tasks</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Automatically shift uncompleted tasks into upcoming open study blocks.
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleChange('autoReschedule', !settings.autoReschedule)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        settings.autoReschedule ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.autoReschedule ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: NOTIFICATIONS & REMINDERS */}
            {activeTab === 'notifications' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Bell className="w-5 h-5 text-indigo-500" />
                    Notifications & Reminders
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Stay on track with customizable notifications and quiet hours.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'sessionReminders', title: 'Study Session Reminders', desc: 'Alert 10 mins before planned study blocks' },
                    { key: 'dailyBriefing', title: 'Daily AI Briefing Email', desc: 'Receive morning schedule summaries and goal highlights' },
                    { key: 'spacedRepetitionAlerts', title: 'Spaced Repetition Flashcard Alerts', desc: 'Smart prompts for optimal memory review intervals' },
                    { key: 'examCountdown', title: 'Exam Countdown & Milestone Alerts', desc: 'Weekly urgency updates leading up to key exam dates' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3.5 border border-slate-200 dark:border-slate-800 rounded-xl">
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleChange(item.key, !settings[item.key])}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings[item.key] ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}

                  {/* Do Not Disturb Time Pickers */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">Do Not Disturb (Silent Hours)</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Mute all study prompts during rest time</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleChange('dndEnabled', !settings.dndEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.dndEnabled ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings.dndEnabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    {settings.dndEnabled && (
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div>
                          <label className="block text-[10px] font-semibold uppercase text-slate-400 mb-1">DND Start Time</label>
                          <input
                            type="time"
                            value={settings.dndStart}
                            onChange={(e) => handleChange('dndStart', e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold uppercase text-slate-400 mb-1">DND End Time</label>
                          <input
                            type="time"
                            value={settings.dndEnd}
                            onChange={(e) => handleChange('dndEnd', e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: DATA & INTEGRATIONS */}
            {activeTab === 'data' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-500" />
                    Data & Integrations
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Export your study schedules or connect external calendar accounts.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* External Calendar Sync */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Calendar Sync Target
                    </label>
                    <select
                      value={settings.calendarSync}
                      onChange={(e) => handleChange('calendarSync', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                      <option value="Google Calendar">Google Calendar</option>
                      <option value="Microsoft Outlook">Microsoft Outlook</option>
                      <option value="Apple Calendar">Apple iCal</option>
                      <option value="Disabled">Disabled (Manual Only)</option>
                    </select>
                  </div>

                  {/* Export Options */}
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
                    <div className="text-sm font-semibold">Export Study Data</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Download your AI study schedule to import into external tools or save backups.
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => showToast('Schedule exported as .ICS calendar file!')}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                      >
                        <Download className="w-4 h-4 text-indigo-500" />
                        Export .ICS Calendar
                      </button>
                      <button
                        onClick={() => showToast('Study profile exported as JSON!')}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                      >
                        <Download className="w-4 h-4 text-purple-500" />
                        Export Config (JSON)
                      </button>
                    </div>
                  </div>

                  {/* Reset AI Memory */}
                  <div className="p-4 border border-rose-200 dark:border-rose-900/40 rounded-xl bg-rose-50/30 dark:bg-rose-950/10 space-y-3">
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-sm">
                      <ShieldAlert className="w-4 h-4" />
                      Danger Zone: Reset AI Conversation & Memory
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Clears all recorded AI interaction logs and topic memory. This will reset the AI's understanding of your weak areas.
                    </p>
                    <button
                      onClick={() => showToast('AI memory and topic tracking cleared!')}
                      className="px-3.5 py-2 rounded-xl text-xs font-medium text-rose-600 dark:text-rose-400 border border-rose-300 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-all"
                    >
                      Clear AI Topic Memory
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Live Summary Sidebar Card */}
          {}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-xl border border-indigo-500/20 relative overflow-hidden sticky top-24">
              
              {/* Background Accent Decorative Blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <span className="font-semibold text-sm tracking-wide">Live AI Assistant Profile</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Active Profile
                </span>
              </div>

              {/* Persona Summary Header */}
              <div className="my-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/30">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-100">{settings.aiTone}</h3>
                  <p className="text-xs text-indigo-300">{settings.academicLevel} • {settings.majorStream || 'General'}</p>
                </div>
              </div>

              {/* Live Config Dynamic Highlights */}
              <div className="space-y-3 bg-slate-900/80 rounded-xl p-4 border border-slate-800/80 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" /> Daily Target
                  </span>
                  <span className="font-semibold text-slate-200">{settings.dailyTargetHours} Hours / Day</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" /> Focus Block
                  </span>
                  <span className="font-semibold text-slate-200">{settings.studyBlockType}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Peak Energy
                  </span>
                  <span className="font-semibold text-slate-200">{settings.peakProductivity}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-pink-400" /> Learning Style
                  </span>
                  <span className="font-semibold text-slate-200">{settings.learningStyle}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-400" /> Exam Target Date
                  </span>
                  <span className="font-semibold text-slate-200">{settings.targetDate || 'Not Set'}</span>
                </div>
              </div>

              {/* Dynamic Strategy Prompt Bubble */}
              <div className="mt-5 p-3.5 bg-indigo-950/40 border border-indigo-800/40 rounded-xl">
                <div className="text-[11px] font-semibold text-indigo-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Generated Strategy Prompt
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "Planner tuned for <span className="text-indigo-300 font-semibold">{settings.dailyTargetHours}h</span> of <span className="text-indigo-300 font-semibold">{settings.studyBlockType}</span> blocks during <span className="text-indigo-300 font-semibold">{settings.peakProductivity}</span>. AI feedback tone set to <span className="text-indigo-300 font-semibold">{settings.aiTone}</span>."
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Reset Confirmation Modal */}
      {}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Reset Settings to Defaults?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              This will overwrite your customized daily hours, academic goals, AI persona choices, and notification preferences back to default values.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleResetDefaults}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-md shadow-rose-500/20"
              >
                Reset All Settings
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}