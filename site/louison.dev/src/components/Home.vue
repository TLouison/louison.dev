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
			<div class="">
				<div class="technical-info">
					<div class="professional">
						<h3>I've used these technologies professionally</h3>
						<li class="block-list">
							<ul>
								<div class="language-block">
									<img
										src="/assets/python-logo.svg"
										width="150"
										height="150"
									/>
									<span class="language">Python</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/js-logo.svg"
										width="150"
										height="150"
									/>
									<span class="language">Javascript</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/django-logo.svg"
										width="150"
										height="150"
										style="background: white"
									/>
									<span class="language">Django</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/vue-logo.svg"
										width="150"
										height="150"
									/>
									<span class="language">Vue.js</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/aws-logo.svg"
										width="150"
										height="150"
										style="filter: none"
									/>
									<span class="language">AWS</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/storybook-logo.svg"
										width="150"
										height="150"
									/>
									<span class="language">Storybook</span>
								</div>
							</ul>
						</li>
					</div>
					<div class="personal">
						<h3>I've also used these in personal projects</h3>
						<li class="block-list">
							<ul>
								<div class="language-block">
									<img
										src="/assets/rust-logo.svg"
										width="150"
										height="150"
										style="background: white"
									/>
									<span class="language">Rust</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/swift-logo.svg"
										width="150"
										height="150"
									/>
									<span class="language">Swift</span>
								</div>
							</ul>
							<ul>
								<div class="language-block">
									<img
										src="/assets/firebase-logo.svg"
										width="150"
										height="150"
									/>
									<span class="language">Firebase</span>
								</div>
							</ul>
						</li>
					</div>
				</div>
			</div>
		</section>
		<div class="skew-divider"></div>
		<section class="hobbies">
			<h2>
				But, I'm <span class="fancy-text">more</span> than just an
				engineer
			</h2>
			<h3>I have lots of hobbies! To name a few:</h3>
			<div class="glide">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides">
						<li class="glide__slide rect">
							<img src="/assets/3dPrinting.jpg" />
							3D Printing
						</li>
						<li class="glide__slide rect">
							<img src="/assets/photography.jpg" />
							Photography
						</li>
						<li class="glide__slide rect">
							<img src="/assets/guitar.jpg" />
							Guitar
						</li>
						<li class="glide__slide rect">
							<img src="/assets/cooking.jpg" />
							Cooking
						</li>
						<li class="glide__slide rect">
							<img src="/assets/coffee.jpg" />
							Coffee
						</li>
						<li class="glide__slide rect">
							<img src="/assets/alliance.jpg" />
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
		<!-- <div class="skew-divider shift-down"></div> -->
		<footer class="contact">
			<h1>Contact me</h1>
			<div class="social-links">
				<a href="https://github.com/TLouison/" target="_blank">
					<button class="button">
						<font-awesome-icon icon="fa-brands fa-github" />
					</button>
				</a>
				<a href="https://twitter.com/TMLouison" target="_blank">
					<button class="button twitter">
						<font-awesome-icon icon="fa-brands fa-twitter" />
					</button>
				</a>
				<a href="mailto:toddmlouison@gmail.com">
					<button class="button email">
						<font-awesome-icon
							icon="fa-regular fa-envelope"
							style="color: black"
						/>
					</button>
				</a>
			</div>
		</footer>
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
