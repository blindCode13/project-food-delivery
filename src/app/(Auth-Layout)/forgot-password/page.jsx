import Logo from "@/components/Logo";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
	return (
		<section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

			<div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

				<div className="p-8 md:p-14 flex items-center">

					<div className="w-full max-w-lg mx-auto">

						<Link href="/" className="flex lg:hidden items-center gap-2 text-black mb-10">
							<Logo size={42}/>

							<h2 className="text-3xl font-bold">
								DineDrop
							</h2>
						</Link>

						<div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">
							<Mail size={28}/>
						</div>

						<h2 className="mt-8 text-4xl font-extrabold text-black">
							Forgot Password?
						</h2>

						<p className="mt-4 text-gray-500 leading-7">
							No worries. Enter your email address and we’ll send you a link to reset your password and get back to ordering your favorite meals.
						</p>

						<form className="mt-10 space-y-6">

							<div>
								<label className="text-sm font-semibold text-black">
									Email Address
								</label>

								<input
									type="email"
									placeholder="Enter your email"
									className="w-full mt-2 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-black transition"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition cursor-pointer"
							>
								Send Reset Link
							</button>
						</form>

						<div className="mt-8 text-center">
							<Link
								href="/login"
								className="text-gray-500 hover:text-black font-medium transition hover:underline"
							>
								Back to Login
							</Link>
						</div>

					</div>
				</div>

				<div className="hidden lg:flex relative bg-black p-10 md:p-14 flex-col justify-between min-h-[500px]">

					<div className="absolute inset-0 opacity-40">
						<img
							src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
							alt="Food"
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="relative z-10">
						<Link href="/" className="flex items-center gap-2 text-white">
							<Logo size={48}/>

							<h2 className="text-3xl font-bold">
								DineDrop
							</h2>
						</Link>

						<h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
							Get back to your favorite meals in just a few steps
						</h1>

						<p className="mt-6 text-gray-300 leading-7 max-w-md">
							We’ll help you securely reset your password so you can continue exploring delicious dishes and fast food delivery.
						</p>
					</div>

					<div className="relative z-10 mt-10">
						<div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-5">
							<p className="text-white text-lg font-semibold">
								Secure Access • Quick Recovery • Seamless Experience
							</p>

							<p className="mt-2 text-gray-300 text-sm leading-6">
								Your account security matters to us. Reset your password easily and continue enjoying your food journey.
							</p>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}