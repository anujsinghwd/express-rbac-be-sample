const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};
module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Anuj", role: ROLE.ADMIN },
    { id: 2, name: "Tushar", role: ROLE.BASIC },
    { id: 3, name: "Gemini", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Anuj's Project", userId: 1 },
    { id: 2, name: "Tushar's Project", userId: 2 },
    { id: 3, name: "Gemini's Project", userId: 3 },
  ],
};
