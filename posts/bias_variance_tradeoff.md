---
title: Bias Variance Tradeoff from First Principles
subtitle: An intuitive and mathematical exploration of the Bias Variance Tradeoff
hierarchy: "/ Writings / Machine Learning"
date: "2024-05-28"
---

When designing the Fukushima power plant in Japan, engineers needed to predict the frequency of earthquakes. They used the Gutenberg-Richter Law, a well-known principle that estimates the probability of a strong earthquake based on the frequency of weaker ones. The law indicates a linear relationship between the magnitude of an earthquake and the loga- rithm of its probability. This led them to fit a regression line to the data, which they used to predict the probability of a strong earthquake. The fitted regression line is shown below:

Note how the regression line fits the data almost perfectly. This is a classic example of overfitting. This model predicts a strong earthquake of magnitude 9.0 or above every 13000 years. Now, let us look at the regularized or non-overfitted model. It is shown below:

And something really terrible happened back in 2011. However, claiming this is just a hindsight bias that is to cook up a convincing story in hindsight to explain the bias-variance tradeoff, as Nassim Nicholas Taleb says in his book, Fooled by Randomness.

> A mistake is not something to be determined after the fact, but in the light of the information until that point. A more vicious effect of such hindsight bias is that those who are very good at predicting the past will think of themselves as good at predicting the future, and feel confident about their ability to do so.

Now back to the bias-variance tradeoff, in simple words, the bias-variance tradeoff is the
tradeoff between the bias and the variance of the model. As you try to reduce bias (make
the model more complex), variance often increases, and vice versa. There is a nice image in the book The Skin in the Game by Nassim Nicholas Taleb that explains the bias-variance tradeoff.

The bias-variance tradeoff stands as a key challenge in supervised machine learning. A
too-simple model might underfit that is it would not capture the signal and a too-complicated model might overfit that is it would make noisy predictions.

Now let us look at the bias variance tradeoff from first principles of statistics.

## What is variance?
Variance is the second moment about the mean. 
