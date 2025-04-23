#!/usr/bin/env python3

"""
    this module contains a function that returns values with types.
"""


from typing import Iterable, Sequence, Tuple, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function that takes lst as argument. It is an iterable object with length.
    Returns a list of tuples with a sequence and an int.
    """
    return [(i, len(i)) for i in lst]
