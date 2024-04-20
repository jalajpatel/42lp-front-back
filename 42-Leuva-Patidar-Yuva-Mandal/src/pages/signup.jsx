import {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicke
import { ArrowRight } from "lucide-react";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
export default function SignUp() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
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
			setLoading(true);
			const res = await fetch('http://localhost:4000/api/user/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			console.log(data);
			if (data.success === false) {
				setLoading(false);
				setError(data.message);
				return;
			}
			setLoading(false);
			setError(null);
			navigate('/sign-in');
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};
	const handleImageChange = (e) => {
		const file = e.target.files[0]; // Get the first selected file
		if (file) {
			// Check if a file is selected
			const fileSize = file.size / 1024 / 1024; // Convert file size to MB
			if (fileSize > 1) {
				// Check if file size exceeds 1 MB
				alert("Please select an image file smaller than 1 MB."); // Display error message
				e.target.value = null; // Reset file input to clear selected file
			} else {
				// File is valid, update form data or perform further actions
				setFormData((prevFormData) => ({
					...prevFormData,
					pic: file, // Store the selected file in form data
				}));
			}
		}
	};
	const handleDateChange = (date) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			bday: date, // Update bday field in formData with selected date
		}));
	};
	const [members, setMembers] = useState([
		{
			id: 1,
			fullName: "",
			photo: null,
			relationshipWithMainPerson: "",
			relative: "",
			mobileNumber: "",
			dateOfBirth: "",
			collegeName: "",
			educationDetails: "",
			occupation: "",
			maritalStatus: "",
		},
	]);

	const addMember = () => {
		const newMember = {
			id: members.length + 1,
			fullName: "",
			photo: null,
			relationshipWithMainPerson: "",
			relative: "",
			mobileNumber: "",
			dateOfBirth: "",
			collegeName: "",
			educationDetails: "",
			occupation: "",
			maritalStatus: "",
		};
		setMembers([...members, newMember]);
	};

	const removeMember = (id) => {
		const updatedMembers = members.filter((member) => member.id !== id);
		setMembers(updatedMembers);
	};

	const handleChangee = (e, memberId) => {
		const { name, value, type } = e.target;
		const updatedMembers = members.map((member) =>
			member.id === memberId
				? {
						...member,
						[name]: type === "file" ? e.target.files[0] : value, // Update photo field with file object
				  }
				: member
		);
		setMembers(updatedMembers);
	};

	const validatePhotoSize = (file) => {
		if (file) {
			const fileSize = file.size / 1024 / 1024; // Convert file size to MB
			if (fileSize > 1) {
				alert("Please select an image file smaller than 1 MB."); // Display error message
				return false; // Return false to indicate invalid file size
			}
		}
		return true; // Return true if file size is valid or no file is selected
	};

	return (
		<section>
			<NavBar />
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
					<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
						<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
							Sign up
						</h2>
						<p className="mt-2 text-base text-gray-600">
							પહેલાથી એકાઉન્ટ છે?{" "}
							<a
								href="/sign-in"
								title=""
								className="font-medium text-black transition-all duration-200 hover:underline"
							>
								"અહીં ક્લિક કરો (Sign In)"
							</a>
						</p>
						<form onSubmit={handleSubmit} className="mt-8">
							<div className="space-y-5">
								<div>
									<label
										htmlFor="name"
										className="text-base font-medium text-gray-900"
									>
										{" "}
										ઘરના મુખ્ય સભ્યનું પૂરું નામ{" "}
									</label>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="ઘરના મુખ્ય સભ્યનું પૂરું નામ"
											id="name"
											onChange={handleChange}
											required
										></input>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="pic"
										className="text-base font-medium text-gray-900"
									>
										ફોટો
									</label>
								</div>
								<div className="mt-2">
									<input
										type="file"
										accept="image/*"
										id="pic"
										onChange={handleImageChange}
										required
										className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>
								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="village"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											ગામનું નામ{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="ગામનું નામ"
											id="village"
											onChange={handleChange}
											required
										></input>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="mosal"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											મોસાળ{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="મોસાળ"
											id="mosal"
											onChange={handleChange}
											required
										></input>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="address"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											વર્તમાન સરનામું{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="વર્તમાન સરનામું"
											id="address"
											onChange={handleChange}
											required
										></input>
									</div>
									<br></br>
									<div>
										<label
											htmlFor="number"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											મોબાઇલ નંબર{" "}
										</label>
										<div className="mt-2">
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
												type="string"
												placeholder="મોબાઇલ નંબર"
												id="phone_no"
												onChange={handleChange}
												required
											></input>
										</div>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="bday"
											className="text-base font-medium text-gray-900"
										>
											જન્મ તારીખ
										</label>
									</div>
									<div className="mt-2">
										<DatePicker
											selected={formData.bday} // Set selected date from formData
											onChange={(date) =>
												handleDateChange(date)
											} // Handle date change
											required
											dateFormat="dd/MM/yyyy" // Format for displayed date
											placeholderText="જન્મ તારીખ પસંદ કરો" // Placeholder text
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											id="bday"
											type="date"
										/>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="edu"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											કોલેજ નામ સાથે શિક્ષણ{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="કોલેજ નામ સાથે શિક્ષણ"
											id="education"
											onChange={handleChange}
											required
										></input>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="business"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											ધંધો/ નોકરી અને પદવી{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="ધંધો/ નોકરી અને પદવી"
											id="business"
											required
											onChange={handleChange}
										></input>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="mrg"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											વૈવાહિક સ્થિતિ{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="પરણિત/ અપરણિત"
											id="mrg"
											required
											onChange={handleChange}
										></input>
									</div>
									<br></br>
									<div className="flex items-center justify-between">
										<label
											htmlFor="password"
											className="text-base font-medium text-gray-900"
										>
											{" "}
											પાસવર્ડ{" "}
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="string"
											placeholder="પાસવર્ડ"
											id="password"
											required
											onChange={handleChange}
										></input>
									</div>
									<div
										style={{
											maxWidth: "800px",
											margin: "auto",
											padding: "20px",
											background: "#f9f9f9",
											borderRadius: "5px",
										}}
									>
										<form onSubmit={handleSubmit}>
											{members.map((member, index) => (
												<div
													key={member.id}
													style={{
														marginBottom: "20px",
														padding: "10px",
														border: "1px solid #ccc",
													}}
												>
													<h3>Member {index + 1}</h3>
													<div className="form-group">
														<label
															htmlFor={`fullName_${member.id}`}
														>
															પૂરું નામ:
														</label>
														<input
															type="text"
															id={`fullName_${member.id}`}
															name={`fullName_${member.id}`}
															value={
																member.fullName
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`photo_${member.id}`}
														>
															ફોટો (Max 1 MB):
														</label>
														<input
															type="file"
															accept="image/*"
															id="photo"
															onChange={
																handleImageChange
															}
															required
															className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`relationshipWithMainPerson_${member.id}`}
														>
															મુખ્ય વ્યક્તિ સાથે
															સંબંધ:
														</label>
														<input
															type="text"
															id={`relationshipWithMainPerson_${member.id}`}
															name={`relationshipWithMainPerson_${member.id}`}
															value={
																member.relationshipWithMainPerson
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`relative_${member.id}`}
														>
															મોસાળ:
														</label>
														<input
															type="text"
															id={`relative_${member.id}`}
															name={`relative_${member.id}`}
															value={
																member.relative
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`mobileNumber_${member.id}`}
														>
															મોબાઇલ નંબર:
														</label>
														<input
															type="tel"
															id={`mobileNumber_${member.id}`}
															name={`mobileNumber_${member.id}`}
															value={
																member.mobileNumber
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="flex items-center justify-between">
														<label
															htmlFor="dob"
															className="text-base font-medium text-gray-900"
														>
															જન્મ તારીખ
														</label>
													</div>
													<div className="mt-2">
														<DatePicker
															selected={
																formData.bday
															} // Set selected date from formData
															onChange={(date) =>
																handleDateChange(
																	date
																)
															} // Handle date change
															required
															dateFormat="dd/MM/yyyy" // Format for displayed date
															placeholderText="જન્મ તારીખ પસંદ કરો" // Placeholder text
															className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
															id="dob"
															type="date"
														/>
													</div>
													
													<div className="form-group">
														<label
															htmlFor={`collegeName_${member.id}`}
														>
															કોલેજ નામ સાથે
															શિક્ષણ:
														</label>
														<input
															type="text"
															id={`collegeName_${member.id}`}
															name={`collegeName_${member.id}`}
															value={
																member.collegeName
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`educationDetails_${member.id}`}
														>
															ધંધો/નોકરી અને પદવી:
														</label>
														<input
															type="text"
															id={`educationDetails_${member.id}`}
															name={`educationDetails_${member.id}`}
															value={
																member.educationDetails
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`occupation_${member.id}`}
														>
															ધંધો/નોકરી:
														</label>
														<input
															type="text"
															id={`occupation_${member.id}`}
															name={`occupation_${member.id}`}
															value={
																member.occupation
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														/>
													</div>
													<div className="form-group">
														<label
															htmlFor={`maritalStatus_${member.id}`}
														>
															વૈવાહિક સ્થિતિ:
														</label>
														<select
															id={`maritalStatus_${member.id}`}
															name={`maritalStatus_${member.id}`}
															value={
																member.maritalStatus
															}
															onChange={(e) =>
																handleChange(
																	e,
																	member.id
																)
															}
															required
														>
															<option value="">
																પસંદ કરો
															</option>
															<option value="અવિવાહિત">
																વિવાહિત
															</option>
															<option value="વિવાહિત">
																અવિવાહિત
															</option>
														</select>
													</div>
													<button
														type="button"
														onClick={() =>
															removeMember(
																member.id
															)
														}
													>
														સભ્ય દૂર કરો
													</button>
												</div>
											))}
											<button
												type="button"
												onClick={addMember}
											>
												સભ્ય ઉમેરો
											</button>
										</form>
									</div>
								</div>
								<div>
									<button
										type="submitt"
										className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
									>
										નવું એકાઉન્ટ બનાવો.{" "}
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
								<span className="mr-2 inline-block">
									{/* <svg
										className="h-6 w-6 text-rose-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
									</svg> */}
								</span>
								<a href="/sign-in">
									પહેલાથી એકાઉન્ટ છે? "અહીં ક્લિક કરો
								</a>
							</button>
						</div>
					</div>
				</div>
				<div className="h-full w-full">
					{/* <img
						className="mx-auto h-full w-full rounded-md object-cover"
						src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
						alt=""
					/> */}
				</div>
				{
					<div className="page-footer">
						<Footer />
					</div>
				}
			</div>
		</section>
	);
}
