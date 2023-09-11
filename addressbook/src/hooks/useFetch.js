export function useApi() {
  async function getEntrys(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      throw Error(e);
    }
  }
  async function deleteEntry(url) {
    try {
      const response = await fetch(url, { method: "DELETE" });
      return response.status === 200;
    } catch (e) {
      throw Error(e);
    }
  }
  return { getEntrys, deleteEntry };
}
