// export const fetchTestContacts = async (count = 5) => {
//   try {
//     const response = await fetch(`https://randomuser.me/api/?results=${count}`);
//     const data = await response.json();
//     return data.results.map((user) => ({
//       name: `${user.name.first} ${user.name.last}`,
//       email: user.email,
//       phone: user.phone,
//       group: ["personal", "work", "family"][Math.floor(Math.random() * 3)],
//     }));
//   } catch (error) {
//     throw new error("Failed to fetch test contacts");
//   }
// };
