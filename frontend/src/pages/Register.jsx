import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {

        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
        } else if (formData.fullName.length < 3) {
            newErrors.fullName = "Minimum 3 characters required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber =
                "Phone number must be exactly 10 digits";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.state.trim()) {
            newErrors.state = "State is required";
        }

        const passwordRegex =
            /^(?=(?:.*[A-Za-z]){3,})(?=.*\d).{4,}$/;

        if (!passwordRegex.test(formData.password)) {
            newErrors.password =
                "Password must contain at least 3 letters and 1 number";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center py-12 px-4">

            <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">

                <h1 className="text-3xl font-bold text-center text-green-600">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">
                    Join Marketplace Today
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phoneNumber}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {errors.city && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.city}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {errors.state && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.state}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-green-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;