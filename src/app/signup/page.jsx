"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";


const SignupPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        // console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,

        })
        console.log({ data, error });

        if (data) {
            redirect('/')
        }
        if (error) {
            alert('error', error)
        }
    }

     const handleSignupGoogle = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div className="max-w-7xl mx-auto min-h-[70vh] mt-10 ">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Create Account</h1>
            </div>

            <div className="bg-white p-10 shadow-md my-20">
                <Form onSubmit={onSubmit} className="flex flex-col gap-4 space-y-5">

                    {/* Name Field */}

                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Jhon Doe" />
                        <FieldError />
                    </TextField>

                    {/* Image URL Field */}

                    <TextField

                        name="image"
                        type="text"

                    >
                        <Label>Image URL</Label>
                        <Input placeholder="image.com" />
                        <FieldError />
                    </TextField>

                    {/* Email Field */}

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@doe.com" />
                        <FieldError />
                    </TextField>

                    {/* Password Field */}

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit" className={'rounded-none min-w-full bg-cyan-500 text-white'}>

                            Create account
                        </Button>

                    </div>

                </Form>
                <Separator></Separator>
                <div className="whitespace-nowrap text-center my-2">Or</div>
                <div className="">
                    <Button onClick={handleSignupGoogle} className={'w-full rounded-none'}><FcGoogle></FcGoogle> Signin With Google</Button>
                </div>
            </div>

        </div>
    );
};

export default SignupPage;