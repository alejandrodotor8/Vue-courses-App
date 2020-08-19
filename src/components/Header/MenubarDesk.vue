<template>
   <div class="col">
				<div class="menu-bar-text">
					<router-link class="item-menu" to="/">Home</router-link>
					<router-link class="item-menu" to="/courses"
						>Courses</router-link
					>
					<router-link class="item-menu" to="/about">About</router-link>
				</div>
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
						<div id="cart"><TheCart /></div>
					</div>
					<a href="#"
						><img
							src="@/assets/img/profile.png"
							width="50px"
							style="margin: 0 10px;"
					/></a>
				</div>
			</div>
</template>
<script>
	import TheCart from '@/components/Cart/TheCart';
	export default {
		name: 'TheHeader',
		components: {
			TheCart,
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
	
	.form-search {
		color: $font-dark-gray-color !important;
		float: left;
		padding: 0.35rem 0.75rem;
		background-color: $white-color !important;
		border: 1.2px solid $font-gray-color;
		border-radius: 0.7rem;
		margin: 0 10%;
	}
	.menu-bar-text {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		float: left;
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