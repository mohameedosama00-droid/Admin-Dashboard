const users = [
  { name: "Ahmed Ali", email: "ahmed@gmail.com" },
  { name: "Mohamed Osama", email: "mohamed@gmail.com" },
  { name: "Sara Hassan", email: "sara@gmail.com" }
];

const usersTable = document.getElementById("usersTable");
const search = document.getElementById("search");

function renderUsers(data) {
  usersTable.innerHTML = "";
  data.forEach(user => {
    usersTable.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });
}

search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(value)
  );
  renderUsers(filtered);
});

document.getElementById("usersCount").innerText = users.length;
document.getElementById("ordersCount").innerText = 12;
document.getElementById("revenue").innerText = 5400;

renderUsers(users);