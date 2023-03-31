// Define a JavaScript object to represent the museums and their free admission days
const museums = {
  "Első Szombat": ["Óbudai Múzeum"],
  "Első Vasárnap": ["Természettudományi Múzeum", "Terror Háza"],
  "Harmadik Szombat": [
    "Néprajzi Múzeum",
    "Magyar Nemzeti Múzeum",
    "Magyar Nemzeti Galéria",
    "Szépművészeti Múzeum",
    "Ráth György-villa",
    "Szentendrei Skanzen"
  ],
  "Utolsó Szombat": [
    "Budapesti Történeti Múzeum Vármúzeum",
    "Kiscelli Múzeum",
    "Aquincumi Múzeum",
    "Budapest Galéria"
  ],
  "Utolsó Vasárnap": [
    "Magyar Műszaki és Közlekedési Múzeum",
    "Hadtörténeti Múzeum",
    "Ludwig Múzeum"
  ]
};

// Get the table body element where we'll add the museum data
const tableBody = document.getElementById("table-body");

// Loop through the museums object and add each museum and its free admission days to the table
for (const [day, museumsList] of Object.entries(museums)) {
  const row = document.createElement("tr");
  const dayCell = document.createElement("td");
  dayCell.innerText = day;
  row.appendChild(dayCell);

  const museumsCell = document.createElement("td");
  museumsCell.innerText = museumsList.join(", ");
  row.appendChild(museumsCell);

  tableBody.appendChild(row);
}
