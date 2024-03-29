import { components } from "@/components/custom/components";
import ComponentWrap from "@/components/custom/components/ComponentWrap";

export default function ComponentChooser({ com, ...props }) {
	const Component = components.filter((c) => c.id === (com.component_id).toString())?.[0]?.component;
	return <ComponentWrap Component={Component} component={com} {...props} />;
}  
