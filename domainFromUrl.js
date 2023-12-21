// Function to extract the domain from a URL
function getDomainFromUrl(url) {
    try {
      // Use URL constructor to parse the URL
      const parsedUrl = new URL(url);

      // Return hostname, which is the domain
      return parsedUrl.hostname;
    } catch (error) {
      // If there's an error during parsing, log it
      console.error('Error parsing URL:', error.message);
      
      // Return null to indicate an error or invalid input
      return null;
    }
  }
// Call the function with the example URL
const domain = getDomainFromUrl(url);
//   console.log(domain);
return domain;