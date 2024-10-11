import React, { useState } from "react";

function NewWasher() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        bankName: '',
        accountNumber: '',
        bvn: '',
        nin: '',
        profilePicture: null,
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            profilePicture: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare form data for submission
        const data = new FormData();
        data.append('fullName', formData.fullName);
        data.append('phone', formData.phone);
        data.append('bankName', formData.bankName);
        data.append('accountNumber', formData.accountNumber);
        data.append('bvn', formData.bvn);
        data.append('nin', formData.nin);
        data.append('profilePicture', formData.profilePicture);
        data.append('description', formData.description);

        // Send data to the server or process it
        // Example:
        fetch('http://localhost:3001/car-washers/create', {
            method: 'POST',
            body: data,
        }).then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));

        console.log('Form data submitted:', formData);
    };

    return (
        <>
            <main>
                <div className="py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">Washers KYC</h1>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="py-4">
                            <section className="bg-white rounded-lg">
                                <div className="py-8 px-4 mx-auto max-w-[67rem] lg:py-16">
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                                            {/* Full Name */}
                                            <div className="w-full">
                                                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    id="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>

                                            {/* Phone Number */}
                                            <div className="w-full">
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="+234 801 234 5678"
                                                    required
                                                />
                                            </div>

                                            {/* Bank Name */}
                                            <div className="w-full">
                                                <label htmlFor="bankName" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Bank Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="bankName"
                                                    id="bankName"
                                                    value={formData.bankName}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="Your Bank Name"
                                                    required
                                                />
                                            </div>

                                            {/* Account Number */}
                                            <div className="w-full">
                                                <label htmlFor="accountNumber" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Account Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="accountNumber"
                                                    id="accountNumber"
                                                    value={formData.accountNumber}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="0123456789"
                                                    required
                                                />
                                            </div>

                                            {/* BVN */}
                                            <div className="w-full">
                                                <label htmlFor="bvn" className="block mb-2 text-sm font-medium text-gray-900">
                                                    BVN (Bank Verification Number)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="bvn"
                                                    id="bvn"
                                                    value={formData.bvn}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="Enter your BVN"
                                                    required
                                                />
                                            </div>

                                            {/* NIN */}
                                            <div className="w-full">
                                                <label htmlFor="nin" className="block mb-2 text-sm font-medium text-gray-900">
                                                    NIN (National Identification Number)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="nin"
                                                    id="nin"
                                                    value={formData.nin}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    placeholder="Enter your NIN"
                                                    required
                                                />
                                            </div>

                                            {/* Profile Picture */}
                                            <div className="sm:col-span-2">
                                                <label htmlFor="profilePicture" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Profile Picture
                                                </label>
                                                <input
                                                    type="file"
                                                    name="profilePicture"
                                                    id="profilePicture"
                                                    onChange={handleFileChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                    accept="image/*"
                                                    required
                                                />
                                            </div>

                                            {/* Description */}
                                            <div className="sm:col-span-2">
                                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows="8"
                                                    value={formData.description}
                                                    onChange={handleInputChange}
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                                    placeholder="A short description about the washer..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="px-5 py-2.5 mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                        >
                                            Save Washer
                                        </button>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default NewWasher;
