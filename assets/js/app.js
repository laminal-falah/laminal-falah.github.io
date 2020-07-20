Date.prototype.getMonthCustom = function(lang = 'en') {
  const m = {
    en: [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September","October", "November", "December"
    ],
    id: [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
      "Juli", "Agustus", "September","Oktober", "November", "Desember"
    ]
  };

  return m[lang].filter((v, k) => {
    if (k == new Date().getMonth()) return v;
  })[0];
};

const getTime = () => new Date();

const app = () => {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".lds-spinner").style.visibility = "visible";
    } else {
      document.querySelector(".lds-spinner").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };
  const clock = document.getElementById('clock');
  const onDate = document.createElement('span');
  const onTime = document.createElement('span');
  const onGMT = document.createElement('span');

  setInterval(() => {
    let currentTime = getTime();
    let day = currentTime.getDate();
    let month = currentTime.getMonthCustom('id');
    let year = currentTime.getFullYear();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    second = (second < 10 ? "0" : "") + second;
    minute = (minute < 10 ? "0" : "") + minute;
    hour = (hour < 10 ? "0" : "") + hour;
    
    onDate.innerHTML = `Tanggal : ${day}-${month}-${year}&nbsp;`;
    onTime.innerHTML = `Jam : ${hour}:${minute}:${second}&nbsp;`;
    onGMT.innerHTML = currentTime.toTimeString().split(' ')[1];
  }, 1000);

  clock.appendChild(onDate);
  clock.appendChild(onTime);
  clock.appendChild(onGMT);
};

app();
