import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForCompany from "../screens/job-posting/LoginForCompany";
import SignUpForCompany from "../screens/job-posting/SignUpForCompany";
import DashboardForCompany from "../screens/job-posting/DashboardForCompany";
import AddJobs from "../screens/job-posting/tabs/AddJobs";
const Stack = createStackNavigator();

const JobPostingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginForCompany"
        component={LoginForCompany}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpForCompany"
        component={SignUpForCompany}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DashboardForCompany"
        component={DashboardForCompany}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddJobs"
        component={AddJobs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default JobPostingNavigator;
