---
title: "KL Divergence"
subtitle: "An inutitive explanation"
hierarchy: " / Notes / Statistics"
date: "2024-05-26"
---


## Definition
The definition for KL divergence between two probability distributions P and Q is:
$$ D_{\text{KL}}(P||Q) = \sum_{x} P(x) \log \left(\frac{P(x)}{Q(x)}\right) $$
where:
1. **Probability Distributions P and Q**: 
   - $$ P(x) $$ represents the probability of event $$ x $$ occurring in distribution P.
   - $$ Q(x) $$ represents the probability of event $$ x $$ occurring in distribution Q.

2. **Relative Likelihood**:
   - The term $$ \frac{P(x)}{Q(x)} $$ calculates the relative likelihood of event $$ x $$ according to distribution P compared to distribution Q.
   - If this ratio is close to 1, it means that the two distributions are similar for event $$ x $$.

3. **Summation**:
   - The formula sums over all possible events $$ x $$ in the distributions P and Q.
   - For each event, it calculates the difference in information content between the two distributions.

4. **Interpretation**:
   - When $$ P(x) $$ is much larger than $$ Q(x) $$ for an event $$ x $$, the logarithm term amplifies this difference.
   - A higher value in the sum indicates that the event $$ x $$ is significantly more likely in distribution P compared to Q.

## Intuition
   - KL divergence measures how much information is lost when distribution Q is used to approximate distribution P.
   - It quantifies the difference between the two distributions, highlighting areas where they diverge significantly.
   - A KL divergence of 0 indicates that the two distributions are identical, while a higher value signifies greater divergence.

In essence, KL divergence provides a way to assess the discrepancy between two probability distributions, helping in various fields like machine learning, statistics, and information theory to understand the difference in information content between them.
