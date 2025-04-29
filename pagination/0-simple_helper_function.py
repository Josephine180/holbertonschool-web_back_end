#!/usr/bin/env python3


"""
This module is a function that returns a tuple of size two with start and end
index.
"""


from typing import Tuple


def index_range(page, page_size) -> Tuple[int, int]:
    """
    This function takes 2 arguments and return a start and a end
    index corresponding of the range of indexes to return a list.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
