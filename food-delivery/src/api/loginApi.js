export const loginUser = async (userData) => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("HTTP greška: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Greška pri zahtevu za prijavu:", error);
  }
};
