---
title: "Random Walk with Jumps"
subtitle: "Modeling Asset Prices with Jumps and Diffusion"
hierarchy: "/ Notes / Financial Engineering /"
date: "2022-05-20"
reading_time: "5 min"
---

The given jump diffusion model equation for $S_{i+1}$ is: 

$$ S_{i+1} = S_{i} \cdot (1 + (\theta F_{\lambda_{i}} dt) + (\mu  dt) + \sigma \cdot \epsilon_{i} \cdot \sqrt{dt}) $$

### Parameters 

1. **$S_i$ and $S_{i+1}$**    
    - $S_i$: The value of the asset at time step $i$. 
    - $S_{i+1}$: The value of the asset at the next time step $i+1$.  

2. **$\theta F_{\lambda_{i}} dt$**:   
    - **$\theta$**: This is a parameter representing the jump size or the impact of jumps on the asset price. It scales the effect of the jump term. 
    - **$F_{\lambda_{i}}$**: This term represents the jump intensity or the frequency of jumps. It could be modeled by a Poisson process with rate $\lambda_i$.
    - **$dt$**: This represents the time increment between steps $i$ and $i+1$. It is a small time interval.
  
This term accounts for sudden, discrete changes (jumps) in the asset price. Jumps might occur due to events like earnings announcements, economic news, or other unforeseen factors. The jump size is scaled by $\theta$, and the jump intensity is given by $F_{\lambda_{i}}$, indicating how frequently these jumps occur.

3. **Drift Term** $\mu dt$:
    - **$\mu$**: The drift term, representing the expected return or average rate of change of the asset price per unit time.
    - **$dt$**: The time increment, as mentioned above.  
This term represents the deterministic trend of the asset price over time, considering the expected return. It ensures that the model accounts for the average growth rate of the asset.
    
1. **Diffusion Term** $\sigma \cdot \epsilon_i \cdot \sqrt{dt}$
    - **$\sigma$**: The volatility of the asset, which measures the standard deviation of the asset's returns.
    - **$\epsilon_i$**: A standard normal random variable, typically $\epsilon_i \sim N(0,1$. It introduces randomness or stochasticity to the model, capturing the unpredictable fluctuations in the asset price.
    - **$\sqrt{dt}$**: The square root of the time increment, which scales the random term appropriately for the continuous time model.
  
  This term introduces continuous stochastic variability into the asset price. The standard normal variable $\epsilon_i$ introduces randomness, while $\sigma$ scales this randomness to match the observed volatility of the asset. The $\sqrt{dt}$ ensures that the variance of the term scales appropriately with time.
<iframe width="1179" height="663" src="https://www.youtube.com/embed/3SVztrIYDQo" title="Stochastic Process Simulation with Poisson Jumps and Diffusion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  



