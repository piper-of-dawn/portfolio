---
title: Bayes Cheatsheet
subtitle: Express the joint probability of a set of random variables in terms of conditional probabilities
hierarchy: "/ Notes / Statistics"
filename: bayes_cheatsheet.md
date: "2024-07-23"
---
## Marginalisation
Marginalization in conditional probability involves summing over the possible values of some variables to obtain the probability distribution of a subset of the variables. This is useful when we are interested in the probability distribution of a subset of variables, without considering the others.

### Definition and Formula

Given a joint probability distribution $P(X, Y)$, marginalization can be used to find the marginal probability distribution of $X$ by summing over all possible values of $Y$:

```math
P(X) = \sum_{y} P(X, Y = y) 
```
In the context of conditional probability, marginalization can help us find the marginal conditional probability. For instance, given the joint distribution $P(X, Y, Z)$, the conditional probability $P(X \mid Z)$ can be obtained by marginalizing over $Y$:

```math
P(X \mid Z) = \sum_{y} P(X, Y \mid Z)
```
Alternatively, if you have the conditional probability $P(X, Y \mid Z)$, you can marginalize over $Y$ to find $P(X \mid Z)$:

```math
P(X \mid Z) = \sum_{y} P(X \mid Y = y, Z) P(Y = y \mid Z)
```

### Example

Consider three variables: $A$, $B$, and $C$. Suppose we have the joint probability distribution $P(A, B, C)$, and we want to find the marginal conditional probability $P(A \mid C)$.

1. **Joint Distribution:** $P(A, B, C)$

2. **Marginalize over $B$ to find $P(A, C)$:**

```math
P(A, C) = \sum_{b} P(A, B = b, C)
```

3. **Normalize to get $P(A \mid C)$**:

```math
P(A \mid C) = \frac{P(A, C)}{P(C)}
```

However, using conditional probabilities directly, we can marginalize over $B$:

```math
P(A \mid C) = \sum_{b} P(A \mid B = b, C) P(B = b \mid C)
```
## Chain Rule for Joint Distributions
The chain rule of probability, also known as the chain rule for joint distributions, is a method to express the joint probability of a set of random variables in terms of conditional probabilities. 

For a set of $n$ random variables $X_1, X_2, \ldots, X_n$, the chain rule of probability states that the joint probability $P(X_1, X_2, \ldots, X_n)$ can be factored as:

```math
P(X_1, X_2, \ldots, X_n) = P(X_1) \cdot P(X_2 \mid X_1) \cdot P(X_3 \mid X_1, X_2) \cdots P(X_n \mid X_1, X_2, \ldots, X_{n-1})
```


In general form, this can be written as:

```math
P(X_1, X_2, \ldots, X_n) = \prod_{i=1}^{n} P(X_i \mid X_1, X_2, \ldots, X_{i-1})
```

This formula allows you to break down the joint probability into a product of conditional probabilities, which can be easier to handle, especially when dealing with complex distributions or large numbers of variables.
### Example

For three random variables $X, Y, Z$, the chain rule can be written as:

```math
P(X, Y, Z) = P(X) \cdot P(Y \mid X) \cdot P(Z \mid X, Y)
```

Each term in this product represents a conditional probability, showing the dependency of each variable on the preceding ones.
### Use in Bayesian Networks

In Bayesian networks, the chain rule is often used to represent the joint probability distribution over the network's variables by considering the network's structure (i.e., the dependencies among the variables). 

## Factor Conditioning
Factor conditioning refers to the process of conditioning a probability distribution on a subset of its variables, resulting in a new distribution over the remaining variables. 
### Example with Joint Probability Distribution
Let's consider a simple example with three random variables: $A$, $B$, and $C$. Suppose we have the joint probability distribution $P(A, B, C)$.

### Step-by-Step Factor Conditioning

1. **Original Joint Distribution:**

   The joint distribution $P(A, B, C)$ can be factored into conditional probabilities:   
  
  ```math
   P(A, B, C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A, B)
   ```

2. **Conditioning on a Variable:**
   Suppose we want to condition on $A = a$. This means we are interested in the distribution of $B$ and $C$ given $A = a$.

3. **Conditional Distribution:**
   The new distribution after conditioning on $A = a$ is:  
   
   ```math
    P(B, C \mid A = a)
    ```
    This can be computed using the original factors:

  
  ```math
   P(B, C \mid A = a) = \frac{P(A = a, B, C)}{P(A = a)}
   ```
   
   Using the factorization of the joint distribution, we get:  
   ```math
   P(B, C \mid A = a) = \frac{P(A = a) \cdot P(B \mid A = a) \cdot P(C \mid A = a, B)}{P(A = a)}
   ```
   Simplifying, we get:  
   ```math
   P(B, C \mid A = a) = P(B \mid A = a) \cdot P(C \mid A = a, B)
   ```
