import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';

import { ArrowRight } from "lucide-react";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
export default function SignIn() {
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch("http://localhost:4000/api/user/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (res.ok) {
				console.log("Login Sucessfull");
				navigate("/admin");
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section>
			<NavBar />
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
					<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
						<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
							Sign in
						</h2>
						<p className="mt-2 text-sm text-gray-600">
							Don&apos;t have an account?{" "}
							<a
								href="./sign-up"
								title=""
								className="font-semibold text-black transition-all duration-200 hover:underline"
							>
								Create an account
							</a>
						</p>
						<form
							onSubmit={handleSubmit}
							action="#"
							method="POST"
							className="mt-8"
						>
							<div className="space-y-5">
								<div>
									<label
										htmlFor=""
										className="text-base font-medium text-gray-900"
									></label>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											name="phone_no"
											id="phone_no"
											placeholder="મોબાઇલ Mobile Number"
											onChange={handleChange}
											required
										></input>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor=""
											className="text-base font-medium text-gray-900"
										></label>
										<a
											href="#"
											title=""
											className="text-sm font-semibold text-black hover:underline"
											onChange={handleChange}
											required
										>
											{" "}
											Forgot password?{" "}
										</a>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="પાસવર્ડ Password"
											id="password"
											name="password"
										></input>
									</div>
								</div>
								<div>
									<button
										type="submit"
										className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
									>
										{/* <a href="/admin"> */} શરૂ કરો (Get
										started) {/* </a> */}
										<ArrowRight
											className="ml-2"
											size={16}
										/>
									</button>
								</div>
							</div>
						</form>
						<div className="mt-3 space-y-3">
							<button
								type="button"
								className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
							>
								{/* <span className="mr-2 inline-block">
									<svg
										className="h-6 w-6 text-rose-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
									</svg>
								</span> */}
								<a href="/sign-up">નવું એકાઉન્ટ બનાવો.</a>
							</button>
						</div>
					</div>
				</div>
				<div className="h-full w-full">
					{/* <img
						className="mx-auto h-full w-full rounded-md object-cover"
						src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
						alt=""
					/> */}
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</section>
	);
}
