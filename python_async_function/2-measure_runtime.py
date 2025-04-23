#!/usr/bin/env python3

"""
    This module measures the execution's time of a coroutine.
"""


import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay) -> float:

    """
        function to measure the time.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time/n
