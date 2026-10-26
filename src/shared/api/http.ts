const http = {
  get: async (url: string, params?: Record<string, string>) => {
    const queryParams = new URLSearchParams({apiKey: process.env.EXPO_PUBLIC_OMDB_API_KEY || '', ...params});
    try {
      const response = await fetch(`${url}?${queryParams.toString()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default http;
