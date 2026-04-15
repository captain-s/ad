import { NavLink } from "react-router";
// 导入图片
import logoImage from "@/assets/images/logo/logo.png";
import { cn } from "@/utils";

interface Props {
	size?: number | string;
	className?: string;
}
function Logo({ size = 50, className }: Props) {
	return (
		<NavLink to="/" className={cn(className)}>
			<img
				src={logoImage}
				alt="Logo"
				className="relative inline-block"
				style={{
					width: size,
					height: size,
					left: "-1000000px",
					filter: `drop-shadow(var(--colors-palette-primary-default) 1000000px 0)`,
				}}
			/>
		</NavLink>
	);
}

export default Logo;
