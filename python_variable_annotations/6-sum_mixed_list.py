#!/usr/bin/env python3

"""
    This module contains a function that takes a list and returns sum as float.
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
        This function takes a list with int and float as arguments.
        It returns a sum as a float.
    """

    return sum(mxd_lst)
