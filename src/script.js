

// https://cors-anywhere.herokuapp.com/
// https://checkip.amazonaws.com/
// https://www.cloudflare.com/cdn-cgi/trace/

function getIPFromAmazon() {

    fetch("https://www.cloudflare.com/cdn-cgi/trace/", {mode: "no-cors"}).then(res => res.text()).then(data => {return data});

  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

