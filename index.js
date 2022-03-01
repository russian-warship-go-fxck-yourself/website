(async () => {
  const socket = io("http://localhost:3000/web");

  socket.on("connect", () => {
    const statusElement = document.querySelector('#server-status');
    statusElement.innerHTML = `<span class="tag is-primary is-size-6">On</span>`;
  });

  socket.on("disconnect", () => {
    const statusElement = document.querySelector('#server-status');
    statusElement.innerHTML = `<span class="tag is-danger is-size-6">Off</span>`;
  });

  socket.on('stats', (stats) => {
    const clientsCountElement = document.querySelector('#connections-amount');
    const webVisitorsElement = document.querySelector('#web-visitors');
    const targetsLogElement = document.querySelector('#targets-logs');

    targetsLogElement.innerHTML = '';
    targetsLogElement.innerHTML = stats.targetsLogs.map((target) =>
      `<p><span class="tag is-success">+</span> ${target}</p>`
    ).join('');

    clientsCountElement.innerHTML = stats.clientsCount;
    webVisitorsElement.innerHTML = stats.webVisitorsCount;
  });
})();
