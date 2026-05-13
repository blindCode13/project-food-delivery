import Button from "@/components/Button";
import FoodCards from "@/components/FoodCard";

export default function Home() {
	return (
		<>
			<section className="p-2 md:p-4">
				<div className="w-full h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] rounded-3xl relative overflow-hidden">
					<div className="w-full h-full absolute bg-black/50 backdrop-blur-xs -z-10"></div>
					<div className="absolute w-full h-full -z-20">
						<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Banner" className="w-full h-full object-cover"/>
					</div>

					<div className="flex flex-col items-center justify-center h-full text-white px-4">
						<h1 className="text-center text-5xl md:text-8xl font-bold max-w-5xl tracking-tight">
							Bringing Fresh Flavors Straight To You
						</h1>
						<p className="text-center mt-2 md:mt-4 tracking-tight text-base md:text-xl max-w-2xl font-medium">Discover tasty meals, fast delivery, and an effortless ordering experience with DineDrop — your go-to destination for fresh food anytime, anywhere.</p>
						<div className="flex flex-col md:flex-row mt-6 gap-4">
							<Button>Order Now</Button>
							<Button className="bg-transparent border-2 border-white">Explore Menu</Button>
						</div>
					</div>
				</div>
			</section>


			<section className="w-full py-16 px-2 md:px-4">
				<div className="px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase">
							Get Your Food In Less
							<br className="hidden md:flex"/>
							Than An Hour
						</h2>

						<div className="mt-8 border-l-4 border-gray-200 pl-5">
							<p className="text-base leading-7 max-w-md">
								Craving delicious meals without the hassle of cooking or leaving
								                your home? Order your favorite food quickly and satisfy your
								                cravings with just a few taps.
							</p>

							<Button className="bg-black text-white mt-4">Get the App</Button>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-gray-100 rounded-3xl p-6 hover:shadow-lg transition duration-300">
							<span className="text-5xl font-extrabold text-gray-300">01</span>

							<div className="mt-4 overflow-hidden rounded-2xl">
								<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Download app" className="w-full aspect-video object-cover"/>
							</div>

							<h3 className="mt-5 text-2xl font-bold text-black">
								Download the app
							</h3>

							<p className="mt-3 text-gray-600 text-sm leading-6">
								Download the food delivery app and order your meals online for fast
								                delivery.
							</p>
						</div>

						<div className="bg-orange-50 rounded-3xl p-6 hover:shadow-lg transition duration-300">
							<span className="text-5xl font-extrabold text-orange-300">02</span>

							<div className="mt-4 overflow-hidden rounded-2xl">
								<img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Select food" className="w-full aspect-video object-cover"/>
							</div>

							<h3 className="mt-5 text-2xl font-bold text-black">
								Select your food
							</h3>

							<p className="mt-3 text-gray-600 text-sm leading-6">
								Browse thousands of restaurants and pick the meals you love.
							</p>
						</div>

						<div className="bg-gray-50 rounded-3xl p-6 hover:shadow-lg transition duration-300">
							<span className="text-5xl font-extrabold text-gray-300">03</span>

							<div className="mt-4 overflow-hidden rounded-2xl">
								<img src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83" alt="Confirm order" className="w-full aspect-video object-cover"/>
							</div>

							<h3 className="mt-5 text-2xl font-bold text-black">
								Confirm your order
							</h3>

							<p className="mt-3 text-gray-600 text-sm leading-6">
								Place your order easily and get your food delivered quickly.
							</p>
						</div>
					</div>
				</div>
			</section>


			<FoodCards/>


			<section className="w-full bg-white py-12 lg:py-20 px-6 md:px-12">
				<div className="max-w-7xl mx-auto text-center">

					<h2 className="text-4xl md:text-5xl font-extrabold uppercase text-black">
						Why We Are Best
					</h2>
					<div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
						<div className="space-y-8 text-left">

							<div className="flex gap-4">
								<div className="min-w-[52px] h-[52px] rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
									01
								</div>

								<div>
									<h3 className="text-2xl font-bold text-black">
										Wide culinary selection
									</h3>

									<p className="mt-2 text-gray-600 leading-6 text-sm">
										Explore delicious meals from top restaurants with endless food
										                    choices.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="min-w-[52px] h-[52px] rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
									02
								</div>

								<div>
									<h3 className="text-2xl font-bold text-black">
										Fast delivery
									</h3>

									<p className="mt-2 text-gray-600 leading-6 text-sm">
										Get your meals delivered quickly while they’re still fresh and
										                    hot.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="min-w-[52px] h-[52px] rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
									03
								</div>

								<div>
									<h3 className="text-2xl font-bold text-black">
										Exclusive deals
									</h3>

									<p className="mt-2 text-gray-600 leading-6 text-sm">
										Enjoy amazing discounts and special offers available every day.
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-center gap-6">
							<div className="w-[280px] h-[420px] overflow-hidden rounded-[140px] shadow-xl">
								<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd" alt="Burger" className="w-full h-full object-cover"/>
							</div>

							<Button className="bg-black text-white mt-4">Explore Menu</Button>
						</div>

						<div className="space-y-8 text-left">
							<div className="flex gap-4">
								<div className="min-w-[52px] h-[52px] rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
									04
								</div>

								<div>
									<h3 className="text-2xl font-bold text-black">
										Real-time tracking
									</h3>

									<p className="mt-2 text-gray-600 leading-6 text-sm">
										Track your order live from the restaurant directly to your door.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="min-w-[52px] h-[52px] rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
									05
								</div>

								<div>
									<h3 className="text-2xl font-bold text-black">
										24/7 support
									</h3>

									<p className="mt-2 text-gray-600 leading-6 text-sm">
										Our support team is always available whenever you need help.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="min-w-[52px] h-[52px] rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
									06
								</div>

								<div>
									<h3 className="text-2xl font-bold text-black">
										Seamless ordering
									</h3>

									<p className="mt-2 text-gray-600 leading-6 text-sm">
										Order your favorite meals easily with a smooth and simple process.
									</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>


			<section className="w-full bg-black text-white py-20 px-6 md:px-12">
				<div className="max-w-5xl mx-auto">

					<div className="text-center">
						<h2 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase leading-tight">
							Frequently Asked Questions
						</h2>

						<p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-7">
							Everything you need to know about ordering food, delivery,
							              payments, and support.
						</p>
					</div>

					<div className="mt-14 space-y-5">
						<div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white transition duration-300">
							<details className="group">
								<summary className="flex items-center justify-between cursor-pointer list-none">
									<h3 className="text-lg md:text-xl font-semibold">
										How long does delivery usually take?
									</h3>

									<span className="text-4xl group-open:rotate-45 transition duration-300">
										+
									</span>
								</summary>

								<p className="mt-5 text-gray-400 leading-7">
									Most orders are delivered within 30 to 60 minutes depending on
									                  your location, restaurant preparation time, and traffic.
								</p>
							</details>
						</div>

						<div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white transition duration-300">
							<details className="group">
								<summary className="flex items-center justify-between cursor-pointer list-none">
									<h3 className="text-lg md:text-xl font-semibold">
										Can I track my order in real time?
									</h3>

									<span className="text-4xl group-open:rotate-45 transition duration-300">
										+
									</span>
								</summary>

								<p className="mt-5 text-gray-400 leading-7">
									Yes, you can track your order live from the restaurant to your
									                  doorstep directly through the app.
								</p>
							</details>
						</div>

						<div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white transition duration-300">
							<details className="group">
								<summary className="flex items-center justify-between cursor-pointer list-none">
									<h3 className="text-lg md:text-xl font-semibold">
										What payment methods do you accept?
									</h3>

									<span className="text-4xl group-open:rotate-45 transition duration-300">
										+
									</span>
								</summary>

								<p className="mt-5 text-gray-400 leading-7">
									We support credit cards, debit cards, digital wallets, and
									                  cash on delivery in selected locations.
								</p>
							</details>
						</div>

						<div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white transition duration-300">
							<details className="group">
								<summary className="flex items-center justify-between cursor-pointer list-none">
									<h3 className="text-lg md:text-xl font-semibold">
										Are there any special discounts available?
									</h3>

									<span className="text-4xl group-open:rotate-45 transition duration-300">
										+
									</span>
								</summary>

								<p className="mt-5 text-gray-400 leading-7">
									Yes, we regularly offer exclusive discounts, combo deals, and
									                  seasonal promotions for our customers.
								</p>
							</details>
						</div>

						<div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white transition duration-300">
							<details className="group">
								<summary className="flex items-center justify-between cursor-pointer list-none">
									<h3 className="text-lg md:text-xl font-semibold">
										Do you provide customer support 24/7?
									</h3>

									<span className="text-4xl group-open:rotate-45 transition duration-300">
										+
									</span>
								</summary>

								<p className="mt-5 text-gray-400 leading-7">
									Absolutely. Our support team is available 24/7 to help with
									                  orders, payments, refunds, and delivery issues.
								</p>
							</details>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
