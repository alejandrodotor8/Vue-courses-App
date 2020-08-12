<template>
	<div class="row content-cart-course">
		<div class="col-md-auto" style="padding: 0;">
			<div class="img-cart-course">
				<img :src="require(`@/assets/img/${course.bg_image}`)" />
			</div>
		</div>
		<div class="col-md-auto" style="text-align: initial;">
			<h4>{{ course.title }}</h4>
			<p class="cart-teacher">{{ course.teacher }}</p>
			<button @click.prevent="favStatus" class="fav-button">
				<img v-if="fav" src="@/assets/img/Fav.svg"/>
				<img v-else src="@/assets/img/Fav-no.svg"/>
			</button>
		</div>
		<div class="col" style="text-align: end;">
			<div class="cart-content-price">
				<span class="cart-real-price">$ {{ course.price_original }}</span>
				<span class="cart-price">$ {{ course.price }}</span>
			</div>
			<button @click="deleteFromCart" class="remove-cart-button">
				<img src="@/assets/img/icon-trash.svg" width="22px" />
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Itemcart',
		props: ['course'],
		data() {
			return {};
		},
		computed: {
			fav() {
				return JSON.parse(this.course.fav_status);
			},
		},
		methods: {
			deleteFromCart() {
				this.$store.dispatch('deleteCourseFromCartAction', this.course);
			},
			favStatus() {
				this.$store.dispatch('changeFavStatusAction', this.course);
			},
		},
	};
</script>

<style lang="scss">
	@import '@/assets/styles/style.scss';

	.content-cart-course {
		width: 400px;
		background-color: $white-color;
		box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		border-radius: 15px;
		border: 2px solid $green-border-color;
		margin: 1em auto;
		h4 {
			color: $font-dark-color;
			font-size: 13px;
			font-weight: 600;
			padding-top: 1em;
			margin-bottom: 0.2rem;
		}
	}
	.img-cart-course img {
		width: 130px;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
	}
	.cart-teacher {
		color: $font-dark-color;
		font-size: 12px;
		font-weight: 300;
		margin-bottom: 0.2rem;
		letter-spacing: 0.07em;
	}
	.cart-content-price {
		margin-top: 8px;
		text-align: end;
	}
	.cart-real-price {
		width: 172px;
		font-weight: 500;
		color: $font-gray-color;
		font-size: 12px;
	}
	.cart-price {
		color: $font-dark-color;
		font-weight: 700;
		font-size: 12px;
	}
	.remove-cart-button {
		display: block;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0;
		margin-left: auto;
		margin-top: 20px;
	}
	.fav-button {
		background-color: transparent;
		border: 1px solid transparent;
		img {
			width: 26px;
		}
	}
</style>
