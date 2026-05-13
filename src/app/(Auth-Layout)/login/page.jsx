import Logo from "@/components/Logo";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
	return (
		<section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

			<div className="w-full max-w-7xl bg-white rounded-[40px] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
				<div className="hidden lg:flex relative bg-black p-10 md:p-14 flex-col justify-between min-h-[500px]">

					<div className="absolute inset-0 opacity-40">
						<img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Food" className="w-full h-full object-cover"/>
					</div>

					<div className="relative z-10">
						<Link href="/" className="flex items-center gap-2 text-white">
							<Logo size={48}/>

							<h2 className="text-3xl font-bold">
								DineDrop
							</h2>
						</Link>

						<h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
							Order your favorite meals anytime with our food delivery app
						</h1>

						<p className="mt-6 text-gray-300 leading-7 max-w-md">
							Discover tasty dishes, quick delivery, and exclusive offers —
							all in one place. Enjoy restaurant-quality meals delivered
							straight to your doorstep.
						</p>
					</div>

					<div className="relative z-10 mt-10">
						<div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-5">
							<p className="text-white text-lg font-semibold">
								Fast Delivery • Fresh Food • Easy Ordering
							</p>

							<p className="mt-2 text-gray-300 text-sm leading-6">
								Join thousands of food lovers enjoying delicious meals every
								day with seamless online ordering.
							</p>
						</div>
					</div>
				</div>

				<div className="p-8 md:p-14 flex items-center">

					<div className="w-full max-w-lg mx-auto">

						<Link href="/" className="flex lg:hidden items-center gap-2 text-black mb-10">
							<Logo size={42}/>

							<h2 className="text-3xl font-bold">
								DineDrop
							</h2>
						</Link>

						<h2 className="text-4xl font-extrabold text-black">
							Welcome Back
						</h2>

						<p className="mt-3 text-gray-500 leading-7">
							Login to continue ordering your favorite meals.
						</p>

						<form className="mt-10 space-y-6">

							<div>
								<label className="text-sm font-semibold text-black">
									Email Address
								</label>

								<input type="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition"/>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label className="text-sm font-semibold text-black">
										Password
									</label>

									<Link href="/forgot-password" type="button" className="text-sm text-gray-500 hover:text-black hover:underline transition">
										Forgot Password?
									</Link>
								</div>

								<input type="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition"/>
							</div>

							<div className="flex items-center gap-3">
								<input type="checkbox" className="w-4 h-4 accent-black"/>

								<p className="text-sm text-gray-600">
									I agree to the Terms & Privacy Policy
								</p>
							</div>

							<button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition cursor-pointer">
								Login
							</button>
						</form>

						<div className="my-8 flex items-center gap-4">
							<div className="flex-1 h-px bg-gray-200"></div>

							<span className="text-gray-400 text-sm">
								OR
							</span>

							<div className="flex-1 h-px bg-gray-200"></div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

							<button className="border border-gray-300 rounded-xl py-4 px-5 flex items-center justify-center gap-3 hover:border-black transition cursor-pointer">
								<BsGoogle size={20}/>
								<span className="font-medium text-black">
									Login with Google
								</span>
							</button>

							<button className="border border-gray-300 rounded-xl py-4 px-5 flex items-center justify-center gap-3 hover:border-black transition cursor-pointer">
								<FaFacebook size={20}/>
								<span className="font-medium text-black">
									Login with Facebook
								</span>
							</button>
						</div>

						<p className="mt-8 text-center text-gray-500">
							Don’t have an account?{" "}
							<Link href="/register" className="text-black font-semibold hover:underline cursor-pointer">
								Register
							</Link>
						</p>

					</div>
				</div>
			</div>
		</section>
	);
}