<template>
	<div>
		<router-link
			:to="{ name: 'detailcourse', params: { slug: course.slug } }"
			style="text-decoration: none;"
		>
			<div class="card-course">
				<div class="col" style="padding: 0;">
					<div class="content-center">
						<div class="img-course">
							<img :src="require(`@/assets/img/${course.bg_image}`)" />
						</div>
						<div class="content-course">
							<h4>{{ course.title }}</h4>
							<p class="teacher">{{ course.teacher }}</p>
							<img src="@/assets/img/stars.svg" width="58px" />
							<p class="price">
								$ {{ course.price_original }}
								<span>$ {{ course.price }}</span>
							</p>
							<button @click.prevent="favStatus" class="fav-button">
								<img v-if="fav" src="@/assets/img/Fav.svg" />
								<img v-else src="@/assets/img/Fav-no.svg" />
							</button>
							<button class="add-cart-button" @click.prevent="addToCart">
								add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name: 'Course',
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
			addToCart() {
				this.$store.dispatch('addCourseToCartAction', this.course);
			},
			favStatus() {
				this.$store.dispatch('changeFavStatusAction', this.course);
			},
		},
	};
</script>
<style lang="scss">
	@import '@/assets/styles/style.scss';

	.card-course {
		background-color: $white-color;
		box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.1);
		width: 220px;
		height: 300px;
		border-radius: 1.2em;
		margin: 0 2.5em 4em 2.5em;
		transition: all 0.2s;
		text-decoration: none;
		&:hover {
			transform: scale(1.1);
		}
	}

	.content-center {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-wrap: wrap;
	}
	.img-course img {
		width: 220px;
		height: 145px;
		border-top-left-radius: 1.2em;
		border-top-right-radius: 1.2em;
	}
	.content-course {
		margin: 0 auto;
		text-align: initial;
		color: $font-dark-color;
		h4 {
			font-size: 14px;
			font-weight: 600;
			padding-top: 1.2em;
		}
		.teacher {
			font-size: 12px;
			font-weight: 300;
			margin-bottom: -6px !important;
			letter-spacing: 1px;
		}
		.price {
			width: 172px;
			font-weight: 500;
			color: $font-gray-color;
			font-size: 13px;
			margin-bottom: 18px;
			text-align: end;
			span {
				font-weight: 700;
				font-size: 14px;
				margin-left: 6px;
				color: $font-dark-color;
			}
		}
	}
	.fav-button {
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0;
		img {
			width: 26px;
		}
	}
	.add-cart-button {
		width: 130px;
		height: 26px;
		background-color: $green-color;
		border: 1px solid $green-border-color;
		border-radius: 12px;
		font-weight: 400;
		font-size: 14px;
		color: $white-color;
		float: right;
	}

	.add-cart-button,
	.add-cart-button:visited,
	.add-cart-button:hover,
	.add-cart-button:active {
		text-decoration: none;
	}
</style>
