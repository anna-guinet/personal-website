document.querySelectorAll('a').forEach(function(link) {
  // Check if the link is external
  if (link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
  }
});