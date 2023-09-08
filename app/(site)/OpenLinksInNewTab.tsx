import { useEffect } from 'react';

function OpenLinksInNewTab() {
  useEffect(() => {
    const links = document.querySelectorAll('a[target="_blank"]');

    links.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer'); // Recommended for security
    });
  }, []);

  return null; // This component doesn't render anything
}

export default OpenLinksInNewTab;
