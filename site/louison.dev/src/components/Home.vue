<template>
	<main>
		<section class="hero">
			<div class="hero-container">
				<div class="profile-image">
					<img src="/assets/todd-portrait-2.jpeg" />
				</div>
				<div class="callout-container">
					<h1 class="callout-header">
						Hi, I'm <span class="fancy-text">Todd</span>!
					</h1>
					<a href="https://github.com/TLouison/" target="_blank">
						<button class="callout-button github-button">
							<font-awesome-icon icon="fa-brands fa-github" />
							Check out my GitHub
						</button>
					</a>
					<a
						href="https://www.linkedin.com/in/todd-louison/"
						target="_blank"
					>
						<button class="callout-button linkedin-button">
							<font-awesome-icon
								icon="fa-brands fa-linkedin-in"
							/>
							Find me on LinkedIn
						</button>
					</a>
					<a href="mailto:toddmlouison@gmail.com" target="_blank">
						<button class="callout-button email-button">
							<font-awesome-icon
								icon="fa-regular fa-envelope"
								style="color: black"
							/>
							Send me an email
						</button>
					</a>
				</div>
			</div>
			<div class="background">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</section>
	</main>
</template>

<script lang="ts">
import Glide from "@glidejs/glide";

export default {
	mounted() {
		new Glide(".glide", {
			autoplay: 10000, //milliseconds
			bound: true,
			perView: 3,
			gap: 16,
		}).mount();
	},
};
</script>

<style scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";
@import "@glidejs/glide/dist/css/glide.theme.min.css";
</style>
