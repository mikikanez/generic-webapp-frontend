import { components } from "@/components/custom/components";

export default function ComponentChooser({ com }) {
	const Component = components.filter((c) => c.id === com.component_id)[0].component;
	return <Component component={com} />;
}
