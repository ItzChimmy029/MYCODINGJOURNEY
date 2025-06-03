def calculate_discounts(orders):
    # Initialise a dictionary to track total spend per customer per county
    customer_spends = {}

    # Helper function to calculate discount amount
    def calculate_discount(spend, current_order_amount):
        if 50 <= spend < 100:
            return current_order_amount * 0.05
        elif 100 <= spend <= 200:
            return current_order_amount * 0.10
        elif spend > 200:
            return current_order_amount * 0.15
        else:
            return 0.0

    # Iterate over each order in the list
    for order in orders:
        customer_id = order['customer_id']  # Assuming each order has a customer_id
        county = order['county']
        amount = order['amount']
        
        # Update spend total for the customer in that county
        if customer_id not in customer_spends:
            customer_spends[customer_id] = {}
        if county not in customer_spends[customer_id]:
            customer_spends[customer_id][county] = 0.0

        customer_spends[customer_id][county] += amount

        # Calculate the discount for the current order
        spend_in_county = customer_spends[customer_id][county]
        discount = calculate_discount(spend_in_county, amount)
        
        # Append the discount amount to the order
        order['discounted_amount'] = discount

    return orders