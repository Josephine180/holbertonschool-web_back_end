#!/usr/bin/env python3

"""
    This module contains a function that takes a float as arg and return a
    function.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies its input by multiplier.
    """
    def multiply(value: float) -> float:
        """
        Function that returns the multiplication
        """
        return value * multiplier

    return multiply
