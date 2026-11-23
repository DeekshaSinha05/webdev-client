
"use client";

import { create } from "zustand";
import coursesJson from "../database/courses.json";
import * as client from "../courses/client";

export type Course = (typeof coursesJson)[number];

const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
  term: "Spring 2023",
};

type CoursesStore = {
  courses: Course[];
  loadCourses: () => Promise<void>;
  addCourse: (course: Course) => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: (course: Course) => Promise<void>;
};

export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: coursesJson,

  loadCourses: async () => {
    const courses = await client.findAllCourses();
    set({ courses });
  },

  addCourse: async (course) => {
    const created = await client.createCourse(course);
    set((state) => ({
      courses: [...state.courses, created],
    }));
  },

  deleteCourse: async (courseId) => {
    await client.deleteCourse(courseId);
    set((state) => ({
      courses: state.courses.filter(
        (c) => c._id !== courseId
      ),
    }));
  },

  updateCourse: async (course) => {
    const updated = await client.updateCourse(course);
    set((state) => ({
      courses: state.courses.map((c) =>
        c._id === updated._id ? updated : c
      ),
    }));
  },
}));

export { emptyCourse };
