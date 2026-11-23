
"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";
import * as client from "../courses/client";

export type Assignment = (typeof assignmentsJson)[number] & {
  until?: string;
};

type AssignmentsStore = {
  assignments: Assignment[];
  loadAssignments: (courseId: string) => Promise<void>;
  addAssignment: (assignment: Assignment) => Promise<void>;
  deleteAssignment: (assignmentId: string) => Promise<void>;
  updateAssignment: (assignment: Assignment) => Promise<void>;
};

export const useAssignmentsStore = create<AssignmentsStore>(
  (set) => ({
    assignments: assignmentsJson as Assignment[],

    loadAssignments: async (courseId) => {
      const loaded = await client.findAssignmentsForCourse(
        courseId
      );
      set((state) => ({
        assignments: [
          ...state.assignments.filter(
            (a) => a.course !== courseId
          ),
          ...loaded,
        ],
      }));
    },

    addAssignment: async (assignment) => {
      const created = await client.createAssignment(
        assignment.course,
        assignment
      );
      set((state) => ({
        assignments: [...state.assignments, created],
      }));
    },

    deleteAssignment: async (assignmentId) => {
      await client.deleteAssignment(assignmentId);
      set((state) => ({
        assignments: state.assignments.filter(
          (a) => a._id !== assignmentId
        ),
      }));
    },

    updateAssignment: async (assignment) => {
      const updated = await client.updateAssignment(
        assignment
      );
      set((state) => ({
        assignments: state.assignments.map((a) =>
          a._id === assignment._id ? updated : a
        ),
      }));
    },
  })
);
