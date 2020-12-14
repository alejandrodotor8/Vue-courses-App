<template>
	<div class="mobile-view" :class="classMobile ? 'open' : ''">
		<router-link @click.native="changeStatus" class="item-menu-mobile" to="/">
			Home
		</router-link>
		<router-link
			@click.native="changeStatus"
			class="item-menu-mobile"
			to="/courses"
			>Courses</router-link
		>
		<router-link
			@click.native="changeStatus"
			class="item-menu-mobile"
			to="/about"
			>About</router-link
		>
		<div class="menu-bar-part2-mobile">
			<input
				@keyup="searchingWord"
				@keyup.enter="changeStatus"
				v-model="searchWord"
				class="form-search-mobile"
				placeholder="Search courses..."
			/>
			<div style="position: relative; text-align: center;">
				<img
					src="@/assets/img/shoppingcart.svg"
					width="40px"
					style="margin:10px;"
				/>
				<div v-if="$store.getters.cartCount != 0" class="number-total-cart">
					{{ $store.getters.cartCount }}
				</div>
				<div id="cart"><TheCart /></div>
			</div>
			<a href="#"
				><img
					src="@/assets/img/profile.png"
					width="50px"
					style="margin:10px;"
			/></a>
		</div>
	</div>
</template>
<script>
	import TheCart from '@/components/Cart/TheCart';
	export default {
		name: 'MenubarMobile',
		components: {
			TheCart,
		},
		props: ['classMobile'],
		data() {
			return {
				searchWord: null,
			};
		},
		methods: {
			changeStatus() {
				this.$emit('msgChangingStatus');
			},
			searchingWord() {
				return this.$store.dispatch('filterAction', this.searchWord);
			},
		},
	};
</script>
<style lang="scss">
	@import '@/assets/styles/style.scss';

	.mobile-view {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: $green-color;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		z-index: 10;
		opacity: 0;
		-webkit-clip-path: circle(100px at 100% 0);
		clip-path: circle(100px at 100% 0);
		-webkit-transition: all 0.5s ease-out;
		-webkit-transition: -webkit-transform all 0.5s ease-out;
		transition: all 0.5s ease-out;
		pointer-events: none;
		&.open {
			-webkit-clip-path: circle(1400px at 100% -15%);
			clip-path: circle(1400px at 100% -15%);
			pointer-events: all;
			opacity: 1;
		}
	}

	.item-menu-mobile {
		text-decoration: none;
		color: $font-dark-color;
		font-size: 25px;
		font-weight: 500;
		padding: 0 0.6em;
		min-width: 50px;
		margin: 10px;
		&:hover {
			text-decoration: none;
			color: $white-color;
		}
		&.router-link-exact-active {
			color: $white-color;
		}
	}
	.menu-bar-part2-mobile {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.form-search-mobile {
			color: $font-dark-gray-color !important;
			float: left;
			padding: 0.35rem 0.75rem;
			background-color: $white-color !important;
			border: 1.2px solid $font-gray-color;
			border-radius: 0.7rem;
			margin: 15px 10%;
		}
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
