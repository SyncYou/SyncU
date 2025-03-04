export function formatTimestamp(timestamp: string) {
    // Create a Date object from the timestamp
    const date = new Date(timestamp);
  
    // Extract day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); 
    const year = date.getFullYear();
  
    // Format the date 
    return `${day} ${month}, ${year}`;
  }