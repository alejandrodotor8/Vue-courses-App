<template>
	<div class="container pt-4 mb-4">
		<div class="row justify-content-md-center" id="header">
			<div class="col-md-auto logo">
				<a class="menu-bar-img">
					<img src="@/assets/img/logo.png" width="50px" />
				</a>
			</div>
			<div
				class="col hamburger"
				v-if="mobileView"
				@click="statusMobile = !statusMobile"
			>
				<div :class="statusMobile ? 'line-t' : 'line'"></div>
				<div :class="statusMobile ? 'line-t' : 'line'"></div>
				<div :class="statusMobile ? 'line-t' : 'line'"></div>
			</div>
			<MenubarMobile
				v-if="mobileView"
				:classMobile="statusMobile"
				@msgChangingStatus="changingStatus"
			/>
			<MenubarDesk v-if="!mobileView" />
		</div>
	</div>
</template>

<script>
	import MenubarDesk from '@/components/Header/MenubarDesk';
	import MenubarMobile from '@/components/Header/MenubarMobile';
	export default {
		name: 'TheHeader',
		components: {
			MenubarDesk,
			MenubarMobile,
		},
		data() {
			return {
				mobileView: null,
				statusMobile: false,
			};
		},
		methods: {
			handleView() {
				this.mobileView = window.innerWidth <= 992;
			},
			changingStatus() {
				this.statusMobile = !this.statusMobile;
			},
		},
		mounted() {
			window.addEventListener('resize', this.handleView);
			window.addEventListener('DOMContentLoaded', this.handleView);
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
	.logo {
		width: auto;
		margin-left: 10px;
	}
	.menu-bar-img {
		min-width: 50px;
		max-width: 50px;
		float: left;
	}
	.hamburger {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: column;
		margin-right: 10px;
		z-index: 20;
		.line,
		.line-t {
			width: 35px;
			height: 5px;
			background: #35495e;
			margin: 2px;
			border-radius: 5px;
			transition: 0.25s ease-in-out;
		}

		.line-t:nth-child(1) {
			transform: rotate(135deg) translate(0px, -12.5px);
		}
		.line-t:nth-child(2) {
			opacity: 0;
			left: -60px;
		}
		.line-t:nth-child(3) {
			transform: rotate(-135deg) translate(0px, 12.5px);
		}
	}
</style>
