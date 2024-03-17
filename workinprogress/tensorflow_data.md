---
title: "TensorFlow API / Data Wrangling"
subtitle: "Data wrangling features of TensorFlow API"
hierarchy: "/ Notes / Tensorflow"
date: "2022-03-05"
reading_time: "5 min"
---

`tensorflow.data.Dataset` api has following useful methods:
- `window()`: This method is used to create a windowed dataset from the **original** dataset. This is useful for creating input-output pairs for time series data.
- `flat_map()`: This method is used to flatten the nested dataset. 
- `shuffle()`: This method is used to shuffle the dataset. Shuffle has a buffer size parameter which contains the number of elements to be shuffled. It should be greater than the number of elements in the dataset.
- `map()`: This method is used to apply a function to each element of the dataset. 
- `batch()`: This method is used to create a batched dataset from the original dataset. A batched dataset is a subset of the original dataset.  
- `prefetch()`: This method is used to prefetch the dataset. This is useful when we want to prefetch the dataset.

```math
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi
```

## Windowing the data
We will take 5 elements per window (i.e. size parameter) and will move this window 1 element at a time (i.e. shift parameter). 
```python
dataset = dataset.window(size=5, shift=1)
```
