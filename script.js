document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const successSection = document.getElementById("successSection")});

    successSection.style.display = "none"; // Cacher la section de succès au départ

    form.addEventListener("submit", function (event) {
        event.preventDefault()}); // Empêcher l'envoi du formulaire

        // Récupération des valeurs du formulaire
        let nom = document.getElementById("nom").value.trim();
        let prenoms = document.getElementById("prenoms").value.trim();
        let dateNaissance = document.getElementById("date_naissance").value;
        let tel = document.getElementById("tel").value.trim();
        let motivation = document.getElementById("motivation").value.trim();

        // Vérification des champs obligatoires
        if (!nom || !prenoms || !dateNaissance || !tel || !motivation) {
            alert("Tous les champs sont obligatoires !");
            return;
        }

        // Vérification de l'âge (minimum 18 ans)
        let birthDate = new Date(dateNaissance);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            alert("Vous devez avoir au moins 18 ans pour vous inscrire !");
            return;
        }

        // Vérification du numéro de téléphone (doit commencer par 01 et avoir 10 chiffres)
        let phoneRegex = /^01\d{8}$/;
        if (!phoneRegex.test(tel)) {
            alert("Le numéro de téléphone doit commencer par 01 et contenir 10 chiffres !");
            return;
        }

        // Vérification de la longueur de la motivation (1000 - 2500 caractères)
        if (motivation.length < 1000 || motivation.length > 2500) {
            alert("La motivation doit contenir entre 1000 et 2500 caractères !");
            return;
        }

        // Affichage des informations saisies
        document.getElementById("displayNom").textContent = nom;
        document.getElementById("displayPrenoms").textContent = prenoms;
        document.getElementById("displayDateNaissance").textContent = dateNaissance;
        document.getElementById("displayTel").textContent = tel;
        document.getElementById("displayMotivation").textContent = motivation;

        // Afficher la section de succès
        successSection.style.display = "block" 
        '})';

        // Réinitialiser le formulaire après