---
title: Using Constrained Optimization to Design Running Plans
subtitle: The mathematics behind the Python application that designs a customized running plan based on user inputs
hierarchy: / Writings / Mathematics
date: "2024-11-30"
---
Most of the things in life are constrained optimization  problems, whether it is managing a securities portfolio or how fast should you run for how long to cover a specific distance in a specific time. Former involves random variables but the latter is a simple, yet beautiful non linear programming problem. To explore this, I developed a Python application that designs a customized running plan based on user inputs. For example, you can input:  

_"I want to run 5 km in 25 minutes, alternating between four different paces—10 km/h, 12 km/h, 13 km/h, and 15 km/h. Ensure I don't spend more than 2 minutes running at 15 km/h and I warmup for atleast 7 minutes at 10km/h, and maximize pace variations to keep the run dynamic and engaging, as I prefer frequent speed changes to avoid monotony."_

The program uses constrained optimization to compute the ideal time allocation for each pace, ensuring all constraints are met. It's a small yet elegant application of mathematics.

Find the application on:
https://run-planner.streamlit.app/

Show me the code:
https://github.com/piper-of-dawn/constrained_optimisation_for_running

The program uses constrained optimization to compute the ideal time allocation for each pace, ensuring all constraints are met. It's a small yet elegant application of mathematics.
### **Mathematical Formulation**

1. **Decision Variables**:  
   - Let $x_1, x_2, \ldots, x_n$ represent the time (in hours) spent running at speeds $v_1, v_2, \ldots, v_n$, respectively.
2. **Constraints**:  
   - **Distance Constraint**: The total distance covered must equal the target distance $D$:       
   ```math
     \sum_{i=1}^n v_i \cdot x_i = D
     ```  
   - **Time Constraint**: The total time spent running must not exceed the available time $T$ (in minutes):      
    ```math
     \sum_{i=1}^n x_i = T
     ```
    - **Bounds**: Each $x_i$ must lie within a feasible range $[x_{i,\text{min}}, x_{i,\text{max}}]$, representing the minimum and maximum time allocatable to each speed. For example, I want to warmup for 10 mins at 11.5 km/h.
	  
3. **Objective Function**:    
    - Since the primary focus is on satisfying the constraints, the objective function is set as a dummy constant $f(x)=1$. This is a neat trick where you end up solving all the equations in a optimization framework.

### Setting Up the Optimization

So we have primary constraint functions:
- **Distance Constraint**:  
  ```math
  c_1(x) = \sum_{i=1}^n v_i \cdot x_i - D
  ```
- **Time Constraint**:    
  ```math
  c_2(x) = \sum_{i=1}^n x_i - \frac{T}{60}
  ```
  and time bounds which we have defined. 

Thus we are minimising $f(x) = 1$ subject to above constraints. Remember, the neat trick!

There will likely be **multiple solutions** to this optimization problem, that is, many pace variations will let you run a distance of $D$ in time $T$. To determine the most suitable running plan, enter a third categorical variable: how frequently you want to vary your pace. Do you prefer to change speeds often, or would you rather run at a steady pace for longer periods? 
This can be achieved by calculating the **Gini coefficient** of the time allocations across the different paces in each solution vector. The Gini coefficient is a measure of inequality, and it helps us understand how "even" or "uneven" something is distributed. Here a **high Gini coefficient** indicates that one or more speeds dominate the running time, which corresponds to fewer pace variations and vice versa. For more details on the Gini coefficient, you can visit the [Wikipedia page](https://en.wikipedia.org/wiki/Gini_coefficient).


