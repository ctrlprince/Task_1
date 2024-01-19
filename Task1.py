import math

# Information for each product
productA = int(input("Enter the quantity of product A: "))
wrap_productA = input("Is product A wrapped(y/n): ")
productB = int(input("Enter the quantity of product B: "))
wrap_productB = input("Is product B wrapped(y/n): ")
productC = int(input("Enter the quantity of product C: "))
wrap_productC = input("Is product C wrapped(y/n): ")

# Calculating subtotals for each product
subtotal_productA = 20 * productA
subtotal_productB = 40 * productB
subtotal_productC = 50 * productC

# Calculating total estimate without discounts and other charges
subtotal = subtotal_productA + subtotal_productB + subtotal_productC


# Discounts
flat_10_discount = 10 if subtotal > 200 else 0
bulk_5_discount = (5 * subtotal) / 100 if max(productA, productB, productC) > 10 else 0
bulk_10_discount = (10 * subtotal) / 100 if productA + productB + productC > 20 else 0
tiered_50_discount = 0

if productA > 15:
    tiered_50_discount += 0.5 * subtotal_productA
if productB > 15:
    tiered_50_discount += 0.5 * subtotal_productB
if productC > 15:
    tiered_50_discount += 0.5 * subtotal_productC

# Determining the maximum discount
max_discount = max(flat_10_discount, bulk_5_discount, bulk_10_discount, tiered_50_discount)

# Examinig the discount category
if max_discount == flat_10_discount:
    discount_category = "flat_10_discount"
elif max_discount == bulk_5_discount:
    discount_category = "bulk_5_discount"
elif max_discount == bulk_10_discount:
    discount_category = "bulk_10_discount"
else:
    discount_category = "tiered_50_discount"



# Calculation of wrapping charges
wrap_fee = sum([productA if wrap_productA == "y" else 0, productB if wrap_productB == "y" else 0,
                productC if wrap_productC == "y" else 0])

# Delivery charges
shipping_fee = sum([math.ceil(productA / 10) * 5, math.ceil(productB / 10) * 5,
                    math.ceil(productC / 10) * 5])

# Calculation of total fee
total_fee = subtotal + wrap_fee + shipping_fee - max_discount


print("Product A, Quantity:", productA)
print("Total amount of Product A :",subtotal_productA)
print("Product B, Quantity :", productB)
print("Total amount of Product B :",subtotal_productB)
print("Product C, Quantity :", productC)
print("Total amount of Product C :",subtotal_productC)
print("Sub-Total :", subtotal)

# discount information
print("Discount applied:", discount_category)
print("Discount amount:", max_discount)

# Display wrapping and delivery charges
print("Shipping fee:", shipping_fee)
print("Gift Wrap fee:", wrap_fee)
print("Total fee:", total_fee)
