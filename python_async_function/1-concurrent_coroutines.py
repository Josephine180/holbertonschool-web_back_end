#!/usr/bin/env python3

"""
    This module executes multiple coroutines at the same time.
"""


import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    This function runs mutiple coroutines at the same time.
    Return the delays of the executions of the tasks.
    """
    tasks = []   # list to store all the coroutine tasks
    for _ in range(n):  # Lauunch 'n' tasks ursing create_task to run them
        task = asyncio.create_task(wait_random(max_delay))  # create task
        tasks.append(task)  # store the task in the list

    # wait the tasks, gather the result in delays
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
