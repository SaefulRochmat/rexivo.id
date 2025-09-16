import Swal from "sweetalert2";

const Scripts = () => {
	const loadToast = (icon, title, text = "") => {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
		});

		Toast.fire({
			icon: icon,
			title: title,
			text: text,
		});
	};

	return { loadToast };
};

export default Scripts;
