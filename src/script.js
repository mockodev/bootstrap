

function getIPFromAmazon() {
    fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => {return data});
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })