import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		// Simulating fetching user data from an API
		fetch("https://api.example.com/users")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching users:", error);
				setLoading(false);
			});
	}, []);

	const handleVerify = (userId, status) => {
		// Simulating API call to update user verification status
		const updatedUsers = users.map((user) => {
			if (user.id === userId) {
				return { ...user, verified: status };
			}
			return user;
		});
		setUsers(updatedUsers);
	};

	const handleUserSelect = (userId) => {
		const user = users.find((user) => user.id === userId);
		setSelectedUser(user);
	};

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

			{loading ? (
				<p className="text-gray-600">Loading...</p>
			) : (
				<div>
					<h2 className="text-xl font-bold mb-4">
						Total Registered Users: {users.length}
					</h2>

					<div className="mb-4">
						<h3 className="text-lg font-bold mb-2">User List</h3>
						<ul>
							{users.map((user) => (
								<li
									key={user.id}
									className="flex items-center justify-between py-2 border-b"
								>
									<span>
										{user.name} -{" "}
										{user.verified
											? "Verified"
											: "Not Verified"}
									</span>
									{!user.verified && (
										<div>
											<button
												className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
												onClick={() =>
													handleVerify(user.id, true)
												}
											>
												Verify
											</button>
											<button
												className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
												onClick={() =>
													handleVerify(user.id, false)
												}
											>
												Decline
											</button>
										</div>
									)}
									<button
										className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
										onClick={() =>
											handleUserSelect(user.id)
										}
									>
										View Details
									</button>
								</li>
							))}
						</ul>
					</div>

					{selectedUser && (
						<div className="mb-4">
							<h3 className="text-lg font-bold mb-2">
								User Details
							</h3>
							<p>
								<strong>Name:</strong> {selectedUser.name}
							</p>
							<p>
								<strong>Email:</strong> {selectedUser.email}
							</p>
							<p>
								<strong>Registration Date:</strong>{" "}
								{selectedUser.registrationDate}
							</p>
						</div>
					)}

					<div>
						<h3 className="text-lg font-bold mb-2">
							Registration Graph
						</h3>
						{/* Implement a graph component here to visualize registration data */}
						{/* Example: <Graph data={registrationData} /> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminDashboard;
