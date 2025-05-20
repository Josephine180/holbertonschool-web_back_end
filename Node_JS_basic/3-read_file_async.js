// On importe le module fs en mode 'promises' pour utiliser async/await
const fs = require('fs').promises;

// Déclaration de la fonction countStudents, qui retourne une Promise (car elle est async)
async function countStudents(path) {
  try {
    // On lit le fichier de manière asynchrone
    // 'utf-8' permet d’obtenir une chaîne de caractères plutôt qu’un Buffer
    const data = await fs.readFile(path, 'utf-8');

    // On divise le contenu du fichier par lignes
    // Et on filtre les lignes vides (trim supprime les espaces autour)
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // On ignore la première ligne (c’est l’en-tête : firstname,lastname,age,field)
    const students = lines.slice(1); // On enlève l'en-tête
    // On crée un objet vide pour stocker les prénoms par champ (CS, SWE, etc.)
    const fields = {};
    // On boucle sur chaque ligne d’étudiant
    for (const line of students) {
       // On découpe la ligne en colonnes (séparées par des virgules)
      const parts = line.split(',');
      // On ne garde que les lignes qui ont au moins 4 colonnes valides
      if (parts.length >= 4) {
        const firstName = parts[0];
        const field = parts[3];
        // Si ce champ n’existe pas encore dans notre objet, on le crée
        if (!fields[field]) {
          fields[field] = [];
        }
        // On ajoute le prénom à la liste du bon champ
        fields[field].push(firstName);
      }
    }
    // On calcule le nombre total d’étudiants (somme des longueurs de chaque tableau)
    const totalStudents = Object.values(fields)
      .reduce((sum, curr) => sum + curr.length, 0);
    // On affiche le nombre total d’étudiants
    console.log(`Number of students: ${totalStudents}`);

    // On affiche les infos pour chaque champ
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (err) {
    // Si la lecture du fichier échoue (fichier non trouvé, etc.), on lève une erreur
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
