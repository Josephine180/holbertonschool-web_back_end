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

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> AsyncGenerator[float, None]:
