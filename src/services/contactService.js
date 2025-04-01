
export const fetchTestContacts = async (count = 10) => {

  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    return data.results.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
      group: ["personal", "work", "family"][Math.floor(Math.random() * 3)],
      picture: user.picture.medium,
    }));
  } catch (Error) {
    throw new Error("Failed to fetch test contacts");
  }
};
