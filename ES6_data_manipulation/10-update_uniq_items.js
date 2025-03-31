export default function updateUniqueItems(map) {
  /* verifier argument est bien map */
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  /* parcourt les entrées de map */
  for (const [key, value] of map) {
  /* key nom de lelement, value quantité */
    if (value === 1) {
    /* si quantite 1 on ajoute 100 à key */
      map.set(key, 100);
    }
  }
}
