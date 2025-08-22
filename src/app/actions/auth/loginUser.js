"use server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = dbConnect("users");
  const user = await userCollection.findOne({ email });

  if (!user) return null;

  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  return {
    id: user._id.toString(),
    email: user.email,
    name: user.name || "No Name",
  };
};
