"use client";

import Image from "next/image";
import { ILogin, loginUser } from "@/queries/login.query";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <section className="isolate min-h-full">
      <Image
        src="/bglaundry.jpg"
        alt="background"
        quality={100}
        className="-z-20 object-cover"
        fill
      />
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex w-full justify-center rounded-xl">
          <div className="w-full bg-white shadow rounded-s-xl md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                Verify
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="p-2.5 px-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500 text-white mt-8 hover:opacity-80 transition-all"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 shadow rounded-e-xl md:mt-0 sm:max-w-md xl:p-0 justify-center content-center p-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/twiska.jpg"
                alt="Logo"
                className="w-24 h-24 object-cover rounded-full"
                width={100}
                height={50}
              />
              <h1 className="text-2xl text-white font-semibold">Twiska Nadila</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
