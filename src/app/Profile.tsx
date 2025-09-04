import React from "react";
import ProfileContent from "../components/ProfileContent";
import { ProfileProps } from "@/types";

const Profile = ({ navigation }: ProfileProps) => {
  return <ProfileContent navigation={navigation} />;
};

export default Profile;
