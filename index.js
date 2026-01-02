const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Archana", dept: "CSE", age: 20 },
  { id: 2, name: "keerthana", dept: "EEE", age: 21 }
];

// GET
app.get("/students", (req, res) => {
  res.json(students);
});

// POST
app.post("/students", (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added successfully" });
});

// PUT
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.map(s =>
    s.id === id ? { ...s, ...req.body } : s
  );
  res.json({ message: "Student updated successfully" });
});

// DELETE
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: "Student deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});