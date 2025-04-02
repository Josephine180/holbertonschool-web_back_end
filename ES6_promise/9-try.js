export default function guardrail(mathFunction) {
  const queue = []; /* initialisation du tableau */
  try {
    const result = mathFunction(); /* stockage du résultat après execution fonction */
    queue.push(result); /* ajoute le resultat au tableau */
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push('Guardrail was processed');
  }
  return queue;
}
