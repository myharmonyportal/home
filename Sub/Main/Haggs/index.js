function copyText(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard!');
    }).catch((error) => {
      alert(`Error copying text: ${error}`);
    });
  }
  function copyHola() {
    const url = 'txt.txt';
    fetch(url)
      .then(response => response.text())
      .then(text => {
        navigator.clipboard.writeText(text).then(() => {
          alert('Text copied to clipboard!');
        }).catch((error) => {
          alert(`Error copying text: ${error}`);
        });
      })
      .catch(error => {
        alert(`Error fetching text: ${error}`);
      });
  }
  function copyHacks() {
    const url = 'hack.txt';
    fetch(url)
      .then(response => response.text())
      .then(text => {
        navigator.clipboard.writeText(text).then(() => {
          alert('Text copied to clipboard!');
        }).catch((error) => {
          alert(`Error copying text: ${error}`);
        });
      })
      .catch(error => {
        alert(`Error fetching text: ${error}`);
      });
  }
  function copyHacks1() {
    const url = 'Hag1.js';
    fetch(url)
      .then(response => response.text())
      .then(text => {
        navigator.clipboard.writeText(text).then(() => {
          alert('Text copied to clipboard!');
        }).catch((error) => {
          alert(`Error copying text: ${error}`);
        });
      })
      .catch(error => {
        alert(`Error fetching text: ${error}`);
      });
  }
