<template>
	<div class="container pt-4 mb-4">
		<div class="row justify-content-md-center" id="header">
			<div class="col">
				<a class="menu-bar-img">
					<img src="@/assets/img/logo.png" width="50px" />
				</a>
				<div class="menu-bar-text">
					<router-link class="item-menu" to="/">Home</router-link>
					<router-link class="item-menu" to="/courses"
						>Courses</router-link
					>
					<router-link class="item-menu" to="/about">About</router-link>
				</div>
			</div>
			<div class="col">
				<div class="menu-bar-part2">
					<input
						@keyup="searchingWord"
						v-model="searchWord"
						class="form-search"
						placeholder="Search courses..."
					/>
					<div style="position: relative; text-align: center;">
						<img
							src="@/assets/img/shoppingcart.svg"
							width="40px"
							style="margin: 0 10px;"
						/>
						<div
							v-if="$store.getters.cartCount != 0"
							class="number-total-cart"
						>
							{{ $store.getters.cartCount }}
						</div>
						<div id="cart"><Cart /></div>
					</div>
					<a href="#"
						><img
							src="@/assets/img/profile.png"
							width="50px"
							style="margin: 0 10px;"
					/></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Cart from './Cart/Cart';
	export default {
		name: 'Header',
		components: {
			Cart,
		},
		data() {
			return {
				searchWord: null,
			};
		},
		methods: {
			searchingWord() {
				return this.$store.dispatch('filterAction', this.searchWord);
			},
		},
	};
</script>

<style lang="scss">
	@import '@/assets/styles/style.scss';

	::placeholder {
		color: $font-dark-gray-color;
		font-size: 15px;
		font-weight: 400;
		line-height: 1.5;
	}
	#header {
		background-color: $white-color;
		box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12);
		border-radius: 15px;
		padding: 10px 0;
	}
	.item-menu {
		text-decoration: none;
		color: $font-dark-gray-color;
		font-size: 17px;
		font-weight: 400;
		padding: 0 0.6em;
		min-width: 50px;
		&:hover {
			text-decoration: none;
			color: $green-color;
		}
		&.router-link-exact-active {
			color: $green-color;
		}
	}
	.menu-bar-img {
		min-width: 50px;
		max-width: 50px;
		float: left;
	}
	.menu-bar-text {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.form-search {
		color: $font-dark-gray-color !important;
		float: left;
		padding: 0.35rem 0.75rem;
		background-color: $white-color !important;
		border: 1.2px solid $font-gray-color;
		border-radius: 0.7rem;
		margin: 0 10%;
	}
	.menu-bar-part2 {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-wrap: wrap;
		div {
			position: relative;
			#cart {
				display: none;
			}
			&:hover #cart {
				display: block;
				position: absolute;
				right: 0;
				top: 100%;
				z-index: 1;
				padding: 20px;
			}
		}
	}
	.number-total-cart {
		position: absolute !important;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $white-color;
		font-size: 16px;
		padding-bottom: 4px;
		padding-left: 5px;
	}
</style>
