function ajouterNote() {
  const titre = document.getElementById("titre").value.trim();
  const contenu = document.getElementById("contenu").value.trim();

  if (!titre || !contenu) {
    alert("Veuillez remplir les deux champs !");
    return;
  }

  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  const h3 = document.createElement("h3");
  h3.textContent = titre;

  const p = document.createElement("p");
  p.textContent = contenu;

  noteDiv.appendChild(h3);
  noteDiv.appendChild(p);

  document.getElementById("liste-notes").appendChild(noteDiv);

  // Réinitialiser les champs
  document.getElementById("titre").value = "";
  document.getElementById("contenu").value = "";
    }
