#!/usr/bin/env python3

"""
    This module contains a function that takes a string, int,float.
"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Creates a tuple with the string and the square of the number.

    """

    return (k, float(v ** 2))
