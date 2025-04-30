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


import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
            """ Return a page of the dataset """
            assert (isinstance(page, int) and page > 0)
            assert (isinstance(page_size, int) and page_size > 0)
            start_index, end_index = index_range(page, page_size)
            dataset = self.dataset()
            if start_index >= len(dataset):
                return []
            return dataset[start_index:end_index]