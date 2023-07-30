const getInitials = (fullName: string) => {
	let initials = fullName
		.split(" ")
		.map((name) => name[0])
		.join("");

	return initials;
};

export default getInitials;
