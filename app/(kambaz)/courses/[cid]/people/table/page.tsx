
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const people = [
    {
      name: "Tony Stark",
      login: "001234561S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
    {
      name: "Bruce Wayne",
      login: "001234562S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-11-02",
      totalActivity: "23:32:23",
    },
    {
      name: "Steve Rogers",
      login: "001234563S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-10-02",
      totalActivity: "13:21:32",
    },
    {
      name: "Natasha Romanoff",
      login: "001234564S",
      section: "S101",
      role: "TA",
      lastActivity: "2020-11-05",
      totalActivity: "11:22:33",
    },
    {
      name: "Harry Potter",
      login: "001234565S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-11-06",
      totalActivity: "12:15:30",
    },
    {
      name: "Ron Weasley",
      login: "001234566S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-11-07",
      totalActivity: "09:45:20",
    },
    {
      name: "Hermione Granger",
      login: "001234567S",
      section: "S101",
      role: "STUDENT",
      lastActivity: "2020-11-08",
      totalActivity: "15:30:45",
    },
    {
      name: "Jane Sample",
      login: "001234568S",
      section: "S102",
      role: "STUDENT",
      lastActivity: "2020-11-09",
      totalActivity: "08:20:10",
    },
    {
      name: "Alex Sample",
      login: "001234569S",
      section: "S102",
      role: "STUDENT",
      lastActivity: "2020-11-10",
      totalActivity: "10:40:15",
    },
    {
      name: "Sam Sample",
      login: "001234570S",
      section: "S102",
      role: "TA",
      lastActivity: "2020-11-11",
      totalActivity: "14:25:30",
    },
  ];

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.login} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {person.name}
              </td>
              <td className="p-2">{person.login}</td>
              <td className="p-2">{person.section}</td>
              <td className="p-2">{person.role}</td>
              <td className="p-2">{person.lastActivity}</td>
              <td className="p-2">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
