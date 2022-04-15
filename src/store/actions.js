// WEB3
export function web3Loaded(connection) {
	return {
		type: 'WEB3_LOADED',
		connection
	}
}

export function web3AccountLoaded(account) {
	return {
		type: 'WEB3_ACCOUNT_LOADED',
		account
	}
}

// TOKEN
export function tokenLoaded(contract) {
	return {
		type: 'TOKEN_LOADED',
		contract
	}
}

// EXCHANGE
export function exchangeLoaded(contract) {
	return {
		type: 'EXCHANGE_LOADED',
		contract
	}
}

// CANCELLED ORDERS
export function cancelledOrdersLoaded(cancelledOrders) {
	return {
		type: 'CANCELLED_ORDERS_LOADED',
		cancelledOrders
	}
}

// FILLED ORDERS
export function filledOrdersLoaded(filledOrders) {
	return {
		type: 'FILLED_ORDERS_LOADED',
		filledOrders
	}
}

// ALL ORDERS
export function allOrdersLoaded(allOrders) {
	return {
		type: 'ALL_ORDERS_LOADED',
		allOrders
	}
}

// CANCELLING ORDERS
export function orderCancelling() {
	return {
		type: 'ORDER_CANCELLING'
	}
}

// CANCELLED ORDERS
export function orderCancelled(order) {
	return {
		type: 'ORDER_CANCELLED',
		order
	}
}

// FILLING ORDERS
export function orderFilling() {
	return {
		type: 'ORDER_FILLING',
	}
}

// FILLED ORDERS
export function orderFilled(order) {
	return {
		type: 'ORDER_FILlED',
		order
	}
}

// ETHER BALANCE LOADED
export function etherBalanceLoaded(balance) {
	return {
		type: 'ETHER_BALANCE_LOADED',
		balance
	}
}

// TOKEN BALANCE LOADED
export function tokenBalanceLoaded(balance) {
	return {
		type: 'TOKEN_BALANCE_LOADED',
		balance
	}
}

// EXCHANGE ETHER BALANCE LOADED
export function exchangeEtherBalanceLoaded(balance) {
	return {
		type: 'EXCHANGE_ETHER_BALANCE_LOADED',
		balance
	}
}

// EXCHANGE TOKEN BALANCE LOADED
export function exchangeTokenBalanceLoaded(balance) {
	return {
		type: 'EXCHANGE_TOKEN_BALANCE_LOADED',
		balance
	}
}

// ALL BALANCES LOADED
export function balancesLoaded(balance) {
	return {
		type: 'BALANCES_LOADED'
	}
}

// BALANCES LOADING
export function balancesLoading() {
	return {
		type: 'BALANCES_LOADING'
	}
}

// ETHER AMOUNT DEPOSIT CHANGED
export function etherDepositAmountChanged(amount) {
	return {
		type: 'ETHER_DEPOSIT_AMOUNT_CHANGED',
		amount
	}
}

// ETHER AMOUNT WITHDRAW CHANGED
export function etherWithdrawAmountChanged(amount) {
	return {
		type: 'ETHER_WITHDRAW_AMOUNT_CHANGED',
		amount
	}
}

// TOKEN AMOUNT DEPOSIT CHANGED
export function tokenDepositAmountChanged(amount) {
  return {
    type: 'TOKEN_DEPOSIT_AMOUNT_CHANGED',
    amount
  }
}

// TOKEN AMOUNT WITHDRAW CHANGED
export function tokenWithdrawAmountChanged(amount) {
  return {
    type: 'TOKEN_WITHDRAW_AMOUNT_CHANGED',
    amount
  }
}

// BUY ORDER AMOUNT CHANGED
export function buyOrderAmountChanged(amount) {
  return {
    type: 'BUY_ORDER_AMOUNT_CHANGED',
    amount
  }
}

// BUY ORDER PRICE CHANGED
export function buyOrderPriceChanged(price) {
  return {
    type: 'BUY_ORDER_PRICE_CHANGED',
    price
  }
}

//MAKING BUY ORDER
export function buyOrderMaking(price) {
  return {
    type: 'BUY_ORDER_MAKING'
  }
}

// GENERIC ORDER
export function orderMade(order) {
  return {
    type: 'ORDER_MADE',
    order
  }
}

// SELL ORDER AMOUNT CHANGED
export function sellOrderAmountChanged(amount) {
  return {
    type: 'SELL_ORDER_AMOUNT_CHANGED',
    amount
  }
}

// SELL ORDER PRICE CHANGED
export function sellOrderPriceChanged(price) {
  return {
    type: 'SELL_ORDER_PRICE_CHANGED',
    price
  }
}

//MAKING SELL ORDER
export function sellOrderMaking(price) {
  return {
    type: 'SELL_ORDER_MAKING'
  }
}






