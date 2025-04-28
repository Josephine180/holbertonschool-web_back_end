#!/usr/bin/env python3

"""
Ce module contient une coroutine asynchrone `async_generator` qui génère 10
nombres aléatoires entre 0 et 10, en attendant 1 seconde entre chaque nombre.
La fonction `async_generator` utilise le module `random` pour générer les
nombres
et `asyncio` pour gérer l'asynchronisme.
"""


import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Cette coroutine génère 10 nombres aléatoires entre 0 et 10.

    Elle attend 1 seconde avant de produire chaque nombre et le renvoie de
    manière asynchrone avec `yield`.

    Retour:
        Un générateur asynchrone qui produit des nombres flottants
        aléatoires entre 0 et 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
