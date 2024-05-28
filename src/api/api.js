const API_BASE_URL = 'https://example.com/api';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/data-endpoint`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
