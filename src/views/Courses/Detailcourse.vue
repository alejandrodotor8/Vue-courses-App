<template>
	<div class="container detail-course">
		<div class="row d-flex flex-wrap" style="padding: 35px 0;">
			<div class="col d-flex flex-wrap content-course">
				<h2>{{ course.title }}</h2>
				<p class="price">
					$ {{ course.price_original }}
					<span>$ {{ course.price }}</span>
				</p>
				<div class="teacher">
					<p>{{ course.teacher }}</p>
					<img src="@/assets/img/stars.svg" width="80px" />
				</div>
				<div class="buttons">
					<button @click.prevent="favStatus" class="fav-button">
						<img v-if="fav" src="@/assets/img/Fav.svg" />
						<img v-else src="@/assets/img/Fav-no.svg" />
					</button>
					<button class="add-cart-button" @click.prevent="addToCart">
						add to cart
					</button>
				</div>
			</div>
			<div class="col img-course d-flex flex-wrap justify-content-center">
				<img :src="require(`@/assets/img/${course.bg_image}`)" />
			</div>
			<div class="w-100"></div>
			<div class="col">
				<p class="description">{{ course.description }}</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Detailcourse',
		data() {
			return {};
		},
		props: {
			slug: {
				type: String,
				required: true,
			},
		},
		computed: {
			course() {
				return this.$store.getters.courses.find(
					(course) => course.slug === this.slug
				);
			},
			fav() {
				return JSON.parse(this.course.fav_status);
			},
		},
		methods: {
			addToCart() {
				this.$store.dispatch('addCourseToCartAction', this.course);
			},
			favStatus() {
				this.$store.dispatch('changeFavStatusAction', this.course);
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import '@/assets/styles/style.scss';

	.detail-course {
		background-color: $white-color;
		box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		transition: all 0.2s;
		margin: 50px auto;
	}
	.content-course {
		padding: 20px 0 0 70px;
	}
	h2 {
		width: 50%;
		color: $font-dark-color;
		font-size: 45px;
		font-weight: 600;
	}
	.price {
		width: 50%;
		font-weight: 500;
		color: #d9d9d9 !important;
		font-size: 18px;
		text-align: end;
		padding-top: 20px;
		span {
			color: $font-dark-color;
			font-weight: 700;
			font-size: 20px;
			margin-left: 6px;
		}
	}
	.teacher {
		width: 100%;
		p {
			font-size: 22px;
			color: $font-dark-color;
			letter-spacing: 1px;
			font-weight: 300;
			margin-bottom: 0 !important;
		}
	}
	.buttons {
		width: 100%;
		display: flex;
		align-items: center;
		.fav-button {
			background-color: transparent;
			border: 1px solid transparent;
			img {
				width: 40px;
			}
		}
		.add-cart-button {
			width: 150px;
			height: 36px;
			background-color: $green-color;
			border: 1px solid $green-border-color;
			border-radius: 12px;
			font-weight: 400;
			font-size: 18px;
			color: $white-color;
			margin-left: auto;
		}
	}
	.img-course {
		padding: 20px;
		img {
			width: 340px;
			height: 226px;
			border-radius: 10px;
		}
	}
	.description {
		color: $font-dark-color;
		font-size: 18px;
		padding: 10px 50px;
		text-align: justify;
	}
</style>
