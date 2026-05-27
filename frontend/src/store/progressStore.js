import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getTotalLessons } from '../data/curriculum';

const useProgressStore = create(
  persist(
    (set, get) => ({
      completed: {},

      toggleComplete: (lessonId) =>
        set((state) => ({
          completed: {
            ...state.completed,
            [lessonId]: !state.completed[lessonId],
          },
        })),

      isCompleted: (lessonId) => !!get().completed[lessonId],

      getCompletedCount: () => Object.values(get().completed).filter(Boolean).length,

      getProgressPercent: () => {
        const total = getTotalLessons();
        const done = get().getCompletedCount();
        return total > 0 ? Math.round((done / total) * 100) : 0;
      },

      getModuleProgress: (moduleId, lessons) => {
        const done = lessons.filter((l) => get().completed[l.id]).length;
        return lessons.length > 0 ? Math.round((done / lessons.length) * 100) : 0;
      },

      reset: () => set({ completed: {} }),
    }),
    { name: 'vibe-progress' }
  )
);

export default useProgressStore;
