---
title: "Collateralized Loan Obligation (CLO)"
subtitle: "Securitized Leveraged Loans"
hierarchy: "/ Notes / Finance"
date: "2024-07-10"
---
## Leveraged Loans

Leveraged loans are loans made to non-investment grade U.S. corporations, typically rated below BBB-/Baa3 by credit rating agencies[1]. Here are the key characteristics of leveraged loans:

1. **Senior secured debt:** They sit at the top of the corporate capital structure and are first in line for repayment among corporate creditors[1].
2. **Secured by collateral:** Leveraged loans are typically secured by all or nearly all of the borrower's assets[1].s
3. **Two components:**
   - Revolving credit: Functions like a credit card for temporary working capital needs
   - Term loan: Drawn once at closing and repaid over time or at maturity[1]
4. **Investor base:** 
   - Revolving credit is typically held by banks
   - Term loans are sold to institutional investors like CLOs, mutual funds, insurance companies, and hedge funds[1]
5. **Covenants:**	
   - Covenants in the context of leveraged loans are contractual agreements between the borrower and lender that place certain restrictions or requirements on the borrower's actions
   - Always have incurrence covenants limiting certain company activities   
   - Revolvers usually have maintenance covenants with quarterly financial tests[1]
7. **Floating rate:** Pays a base rate (historically LIBOR, now SOFR) plus an additional spread[1]
8. Default and recovery rates:
   - Long-term annual default rate averages below 3%
   - Historical average discounted recovery rate of around 79%[1]
9. Market size and holders:
   - CLOs are the largest single holder of leveraged loans, with approximately 64% market share[1]

Leveraged loans get their name because the borrowing companies typically have substantial debt relative to their EBITDA, a ratio known as "leverage"[1]. Despite this, it's important to note that there is no embedded leverage in the loans themselves[1].

## Collateralized Loan Obligation (CLO)

1. A Collateralized Loan Obligation (CLO) is a structured financial product that invests in a diversified pool of leveraged loans made to non-investment grade U.S. corporations.
2. CLOs are typically structured with multiple tranches of securities, ranging from AAA-rated senior debt to equity, with each tranche offering different levels of risk and return.
3. The CLO structure usually consists of 8-15% equity and 85-92% rated debt tranches. 
4. CLOs are actively managed by professional managers who select and monitor the loan portfolio, aiming to generate returns for investors through the funding gap between the income from the underlying loans and the cost of the CLO's liabilities.

### Structure of CLO 

1. A CLO is divided into two main parts: equity and debt. The equity investors are owner of securitized CLO and debt investors are creditors of securitized CLO. 
2. CLOs have a hierarchical "waterfall" structure for distributing cash flows. After paying the rated debt tranches and covering expenses, any residual cash is paid as a return to equity.
3. The equity portion is usually small, making up about 8-15% of the total CLO.
4. The debt portion is much larger, accounting for 85-92% of the CLO.
5. The debt portion is further divided into different "tranches" or layers, which are rated by credit rating agencies (like AAA, AA, A, BBB, etc.).

## Measurement of transparency

### WARF

The Weighted Average Rating Factor Test (WARF) is a key collateral quality test used in CLOs to ensure the portfolio maintains a minimum average credit quality. The calculation involves assigning a numerical rating factor (RF) to each loan based on its credit rating, then computing a weighted average using the formula:

$$ \text{WARF} = \frac{\sum(\text{Principal Balance}_i × \text{RF}_i)} {\sum(\text{Principal Balance}_i)}$$

where i represents each loan in the portfolio. Lower rating factors correspond to higher credit quality. The purpose of WARF is to constrain the CLO manager to maintain a certain level of overall portfolio credit quality, as specified in the CLO's indenture. By setting a maximum allowable WARF, the test helps protect investors in the rated debt tranches by limiting the amount of lower-quality loans that can be included in the portfolio.

### WAS
The Weighted Average Spread Test (WAS) is a key collateral quality test used in CLOs to ensure the portfolio maintains a minimum average spread over the base rate applicable to the liabilities. The calculation involves computing a weighted average using the formula: 

$$ \text{WARF} = \frac{\sum(\text{Principal Balance}_i × \text{Spread}_i)} {\sum(\text{Principal Balance}_i)}$$

where $i$ represents each loan in the portfolio, and $\text{Spread}_i$ is the difference between the loan's interest rate and the base rate (e.g., SOFR). The purpose of WAS is to constrain the CLO manager to maintain a certain level of overall portfolio yield relative to its funding costs, as specified in the CLO's indenture. By setting a minimum allowable WAS, the test helps ensure that the CLO generates sufficient income to cover its liabilities and provide returns for equity investors, while also maintaining an appropriate risk-return profile for the overall portfolio.


## Lifecycle of a CLO
The lifecycle of a CLO can be summarized in three main phases:

1. **Ramp-Up Phase:**
   - Begins before the CLO officially closes
   - The manager builds the initial portfolio of leveraged loans
   - Typically lasts a few months, including the first few months after closing
   - By closing date, most of the target portfolio is purchased

2. **Reinvestment Period:**
   - Usually lasts 3-5 years after the effective date
   - The manager actively manages the portfolio, trading loans within set parameters
   - Interest payments are made to debt tranches, with residual cash flow going to equity
   - After an initial non-call period (1-2 years), the deal can potentially be refinanced or reset

3. **Amortization Period:**
   - Begins after the reinvestment period ends
   - The manager can no longer reinvest proceeds from sold, prepaid, or maturing loans (with limited exceptions)
   - Principal proceeds are used to pay down debt tranches in order of seniority
   - Often called by equity investors within 1-2 years of this period starting, as returns typically compress

The total stated maturity of a CLO is usually 12-13 years, but most CLOs are called or reset before reaching full maturity. Throughout its lifecycle, the CLO is subject to various tests and active management to maintain its structure and performance.

## Citations:
[1] Loan Syndications and Trading Association. "THE U.S. CLO MARKET." Apr. 2022.
[2] Credit Suisse Asset Management. "Introduction to Collateralized Loan Obligations." Credit Suisse, 2022.

