import React, { useEffect, useState } from "react";
import "moment/locale/ca";
import PageAdmin from "@/components/layout/PageAdmin";
import Dashboard from "@mui/icons-material/Dashboard";

export default function DashAdmin() {
	return <PageAdmin title="Dashboard" Icon={Dashboard}></PageAdmin>;
}
