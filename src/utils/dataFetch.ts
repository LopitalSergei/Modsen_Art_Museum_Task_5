export const dataFetch = async (url: string) => {
  try {
    const response = await fetch(url);
    const artData = await response.json();
    return artData;
  } catch (error) {
    throw error;
  }
};
