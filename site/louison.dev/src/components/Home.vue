<template>
	<main>
		<section class="hero">
			<div class="hero-text">
				<h1>Hi! I'm <span class="fancy-text">Todd</span>.</h1>
			</div>
			<div class="scroll-indicator-container">
				<div class="scroll-indicator">
					<svg
						width="71"
						height="43"
						viewBox="0 0 71 43"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="28.4652"
							y="35.8894"
							width="50"
							height="10"
							transform="rotate(-45 28.4652 35.8894)"
							fill="#f0f8ff"
						/>
						<rect
							x="35.5347"
							y="42.9612"
							width="50"
							height="10"
							transform="rotate(-135 35.5347 42.9612)"
							fill="#f0f8ff"
						/>
					</svg>
					<svg
						width="71"
						height="43"
						viewBox="0 0 71 43"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="28.4652"
							y="35.8894"
							width="50"
							height="10"
							transform="rotate(-45 28.4652 35.8894)"
							fill="#f0f8ff"
						/>
						<rect
							x="35.5347"
							y="42.9612"
							width="50"
							height="10"
							transform="rotate(-135 35.5347 42.9612)"
							fill="#f0f8ff"
						/>
					</svg>
				</div>
			</div>
			<div class="hero-background-container">
				<div class="hero-background-pattern"></div>
			</div>
		</section>
		<section class="technical">
			<h2>
				I'm a
				<span class="fancy-text">Full-Stack</span> software engineer
			</h2>
			<div class="technical-info">
				<div class="professional">
					<h3>I've used these technologies professionally</h3>
					<li class="block-list">
						<ul>
							<div>
								<img
									src="../assets/python-logo.svg"
									width="150"
									height="150"
								/>
								Python
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/js-logo.svg"
									width="150"
									height="150"
								/>
								Javascript
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/django-logo.svg"
									width="150"
									height="150"
									style="background: white; scale: 90%"
								/>
								Django
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/vue-logo.svg"
									width="150"
									height="150"
								/>
								Vue.js
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/AWS-logo.svg"
									width="150"
									height="150"
								/>
								AWS
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/storybook-logo.svg"
									width="150"
									height="150"
								/>
								Storybook
							</div>
						</ul>
					</li>
				</div>
				<div class="personal">
					<h3>I've also used these in personal projects</h3>
					<li class="block-list">
						<ul>
							<div>
								<img
									src="../assets/rust-logo.svg"
									width="150"
									height="150"
									style="background: white"
								/>
								Rust
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/swift-logo.svg"
									width="150"
									height="150"
								/>
								Swift
							</div>
						</ul>
						<ul>
							<div>
								<img
									src="../assets/firebase-logo.svg"
									width="150"
									height="150"
								/>
								Firebase
							</div>
						</ul>
					</li>
				</div>
			</div>
		</section>
		<div class="skew-divider"></div>
		<section>
			<h2>
				But, I'm <span class="fancy-text">more</span> than just an
				engineer
			</h2>
			<h3>I have lots of hobbies! To name a few:</h3>
			<div class="glide">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides">
						<li class="glide__slide rect">
							<img src="../assets/3dPrinting.jpg" />
							3D Printing
						</li>
						<li class="glide__slide rect">
							<img src="../assets/photography.jpg" />
							Photography
						</li>
						<li class="glide__slide rect">
							<img src="../assets/guitar.jpg" />
							Guitar
						</li>
						<li class="glide__slide rect">
							<img src="../assets/cooking.jpg" />
							Cooking
						</li>
						<li class="glide__slide rect">
							<img src="../assets/coffee.jpg" />
							Coffee
						</li>
						<li class="glide__slide rect">
							<img src="../assets/alliance.jpg" />
							Video Games
						</li>
					</ul>
				</div>
				<div class="glide__arrows" data-glide-el="controls">
					<button
						class="glide__arrow glide__arrow--left"
						data-glide-dir="<"
					>
						prev
					</button>
					<button
						class="glide__arrow glide__arrow--right"
						data-glide-dir=">"
					>
						next
					</button>
				</div>
			</div>
		</section>
		<section class="contact">
			<h1><span class="fancy-text">Contact me</span></h1>
			<a
				href="https://github.com/TLouison/"
				target="_blank"
				class="button"
			>
				<span>GitHub</span>
			</a>
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
