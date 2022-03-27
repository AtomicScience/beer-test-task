import * as React from "react";
import { Header } from "./Header";

interface LayoutProps {

} 

export const Layout: React.FunctionComponent<LayoutProps> = (props) => {
	return <>
		<Header/>
	</>;
}