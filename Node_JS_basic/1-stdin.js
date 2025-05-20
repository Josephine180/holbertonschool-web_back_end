process.stdin.setEncoding('utf8');
process.stdin.resume();

// Message de bienvenue
console.log('Welcome to Holberton School, what is your name?');

// Quand l'utilisateur tape quelque chose
process.stdin.on('data', (input) => {
  const name = input.trim(); // enlève les sauts de ligne
  console.log(`Your name is: ${name}`);
});

// Quand l'entrée est terminée (par exemple avec echo ou Ctrl+D)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
