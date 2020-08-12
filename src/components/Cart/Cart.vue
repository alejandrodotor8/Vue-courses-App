<template>
	<div class="cart">
		<div class="cart-title">
			<h3>Added to cart ({{ $store.getters.cartCount }})</h3>
		</div>

		<Itemcart
			v-for="item in $store.getters.cart"
			:course="item"
			:key="item.id"
		/>
		<div v-if="checkEmptyCart()" class="empty-cart">
			<span>The cart is empty</span>
			<img src="@/assets/img/Icon-cart.svg" width="35px" />
		</div>
		<div v-if="!checkEmptyCart()" class="footer-cart">
			<div>Total: $ {{ totalPrice().toFixed(2) }}</div>

			<button class="continue-cart-button">
				Continue checkout
				<img src="@/assets/img/Icon-shopify.svg" width="30px" />
			</button>
		</div>
	</div>
</template>

<script>
	import Itemcart from '../Cart/Itemcart';
	export default {
		name: 'Cart',
		components: {
			Itemcart,
		},
		methods: {
			checkEmptyCart() {
				if (this.$store.getters.cartCount === 0) {
					return true;
				} else {
					return false;
				}
			},
			totalPrice() {
				return this.$store.getters.cart.reduce(
					(accum, i) => accum + Number(i.price),
					0
				);
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import '@/assets/styles/style.scss';

	.cart {
		width: 450px;
		min-height: 600px;
		background-color: $green-color;
		box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
		border: 4px solid $green-border-color;
		border-radius: 15px;
		padding-top: 10px;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}
	.cart-title {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		h3 {
			font-weight: 300;
			color: #ffffff;
			letter-spacing: 1px;
			float: left;
		}
	}
	.empty-cart {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px;
		span {
			color: $white-color;
			font-weight: 300;
			margin: 0 10px 0 0;
			font-size: 20px;
		}
	}
	.continue-cart-button {
		width: 250px;
		background-color: $white-color;
		border: 1px solid $font-gray-color;
		border-radius: 10px;
		font-weight: 500;
		font-size: 20px;
		color: $green-color;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px 15px;
	}
	.footer-cart {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		div {
			background-color: $font-dark-color;
			border: 1px solid $font-gray-color;
			border-radius: 10px;
			margin: 20px 5px;
			padding: 6px 10px;
			color: $white-color;
		}
	}
</style>
