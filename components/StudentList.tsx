"use client";

import { Student } from "@/types/student";

interface Props {
  students: Student[];
  onDelete: (id: string) => void;
}

export default function StudentList({ students, onDelete }: Props) {
  if (students.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
        No students registered yet.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Registered Students ({students.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Registered</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2 font-medium text-gray-800">
                  {student.name}
                </td>
                <td className="px-4 py-2 text-gray-600">{student.email}</td>
                <td className="px-4 py-2 text-gray-600">{student.age}</td>
                <td className="px-4 py-2 text-gray-600">{student.course}</td>
                <td className="px-4 py-2 text-gray-500 text-xs">
                  {student.registeredAt}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onDelete(student.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}