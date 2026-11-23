
"use client";

import { create } from "zustand";
import modulesJson from "../database/modules.json";
import * as client from "../courses/client";

export type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};

export type CourseModule = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

type ModulesStore = {
  modules: CourseModule[];
  loadModules: (courseId: string) => Promise<void>;
  addModule: (module: {
    name: string;
    course: string;
  }) => Promise<void>;
  deleteModule: (moduleId: string) => Promise<void>;
  updateModule: (module: CourseModule) => Promise<void>;
  editModule: (moduleId: string) => void;
};

export const useModulesStore = create<ModulesStore>((set) => ({
  modules: modulesJson as CourseModule[],

  loadModules: async (courseId) => {
    const loaded = await client.findModulesForCourse(courseId);
    set((state) => ({
      modules: [
        ...state.modules.filter((m) => m.course !== courseId),
        ...loaded,
      ],
    }));
  },

  addModule: async (module) => {
    const created = await client.createModuleForCourse(
      module.course,
      { ...module, description: "", lessons: [] }
    );
    set((state) => ({
      modules: [...state.modules, created],
    }));
  },

  deleteModule: async (moduleId) => {
    await client.deleteModule(moduleId);
    set((state) => ({
      modules: state.modules.filter(
        (m) => m._id !== moduleId
      ),
    }));
  },

  updateModule: async (module) => {
    const updated = await client.updateModule(module);
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === module._id ? updated : m
      ),
    }));
  },

  editModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === moduleId
          ? { ...m, editing: true }
          : m
      ),
    })),
}));
