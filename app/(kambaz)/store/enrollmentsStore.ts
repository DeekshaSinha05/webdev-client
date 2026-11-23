
"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";
import * as client from "../courses/client";

export type Enrollment = (typeof enrollmentsJson)[number];

type EnrollmentsStore = {
  enrollments: Enrollment[];
  loadEnrollments: () => Promise<void>;
  enroll: (
    userId: string,
    courseId: string
  ) => Promise<void>;
  unenroll: (
    userId: string,
    courseId: string
  ) => Promise<void>;
};

export const useEnrollmentsStore =
  create<EnrollmentsStore>((set) => ({
    enrollments: enrollmentsJson,

    loadEnrollments: async () => {
      const enrollments = await client.findAllEnrollments();
      set({ enrollments });
    },

    enroll: async (userId, courseId) => {
      const enrollment = await client.enroll(
        userId,
        courseId
      );
      set((state) => ({
        enrollments: state.enrollments.some(
          (e) => e._id === enrollment._id
        )
          ? state.enrollments
          : [...state.enrollments, enrollment],
      }));
    },

    unenroll: async (userId, courseId) => {
      await client.unenroll(userId, courseId);
      set((state) => ({
        enrollments: state.enrollments.filter(
          (e) =>
            !(
              e.user === userId &&
              e.course === courseId
            )
        ),
      }));
    },
  }));
