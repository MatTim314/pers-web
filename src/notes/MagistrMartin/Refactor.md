`orderOnPharmos` called from:
- `createOrder`
- `acceptPaymentResult`
	- Called by ComGate after payment either comes through or is cancelled
- `setPaid`
	- Called by ???
	- Called by administration as a way to manually set the order as paid. 
- 