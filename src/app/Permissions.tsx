import React from "react";
import PermissionsContent from "../components/PermissionsContent";
import { PermissionsProps } from "@/types";

const Permissions = ({ navigation }: PermissionsProps) => {
  return <PermissionsContent navigation={navigation} />;
};

export default Permissions;
