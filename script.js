const links = [
  { text: "YouTube", url: "https://youtube.com" },
  { text: "Instagram", url: "https://instagram.com" },
  { text: "Portfolio", url: "https://yourwebsite.com" }
];

const container = document.getElementById("links");
links.forEach(link => {
  const a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.url;
  a.className = "link-btn";
  container.appendChild(a);
});
