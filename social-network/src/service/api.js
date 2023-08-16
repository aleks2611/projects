import axios from "axios";

export async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  } catch (error) {
    throw new Error("Greška pri dohvatanju postova: " + error.message);
  }
}

export async function fetchUser(userId) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    console.log(response.data)
    return response.data
  } catch (error) {
    throw new Error("Greška pri dohvatanju postova: " + error.message);
  }
}

export async function fetchDetailsOfPosts() {
  try {
    const response = await axios.get(
     "https://jsonplaceholder.typicode.com/comments/"
    );
    return response.data
  } catch (error) {
    throw new Error("Greška pri dohvatanju postova: " + error.message);
  }
}
