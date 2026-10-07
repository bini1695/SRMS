"use client";

import { useState } from "react";
import StudentForm from "@/components/StudentForm";
import StudentList from "@/components/StudentList";
import { Student } from "@/types/student";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            🎓 Student Registration System
          </h1>
          <p className="text-gray-600 mt-1">
            Register and manage student records
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <StudentForm onAdd={addStudent} />
          <StudentList students={students} onDelete={deleteStudent} />
        </div>
      </div>
    </main>
  );
}