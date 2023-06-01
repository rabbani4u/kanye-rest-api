const handleQuotes = () => {
  fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(data => handleQuotes2(data));
};

const handleQuotes2 = data => {
  const displayQuotes = document.getElementById("quotes");
  displayQuotes.innerText = data.quote;
  console.log(data);
};
