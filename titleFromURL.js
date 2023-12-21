async function getTitleFromApi(url) {
    try {
      const apiUrl = `https://api.dub.co/metatags?url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const metadata = await response.json();
      const title = metadata?.title || null;
      console.log(title);
      return title;
    } catch (error) {
      console.error('Error fetching metadata:', error);
      return null;
    }
  }
  
  // Example usage:
  // const targetUrl = 'https://github.com/dubinc/dub';
  getTitleFromApi(targetUrl);