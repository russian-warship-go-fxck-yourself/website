(async () => {
  const socket = io("http://localhost:3000/web");

  socket.on('stats', (stats) => {
    const clientsCountElement = document.querySelector('#connections-amount');
    const webVisitorsElement = document.querySelector('#web-visitors');

    clientsCountElement.innerHTML = stats.clientsCount;
    webVisitorsElement.innerHTML = stats.webVisitorsCount;
  });
})();
