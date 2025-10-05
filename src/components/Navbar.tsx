interface NavbarProps {
	currentPath: string;
}

const navLinks = [
	{ href: "/", label: "misery.systems", isBrand: true },
	{ href: "/about", label: "About", isBrand: false },
	{ href: "/services", label: "Services", isBrand: false },
];

const Navbar = ({ currentPath }: NavbarProps) => {
	return (
		<nav className="p-4">
			<div className="w-full md:w-1/2 mx-auto flex justify-between items-center">
				{navLinks
					.filter((link) => link.isBrand)
					.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-lg font-bold relative transition-colors duration-300"
						>
							<span className="hover:underline relative">
								{link.label}
								<span
									className={`absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-all duration-300 ${
										currentPath === link.href
											? "opacity-100 scale-x-100"
											: "opacity-0 scale-x-0"
									}`}
									style={{
										transformOrigin: "left",
										transitionProperty: "opacity, transform",
										transform:
											currentPath === link.href ? "scaleX(1)" : "scaleX(0)",
									}}
									aria-hidden="true"
								/>
							</span>
						</a>
					))}
				<ul className="flex space-x-4">
					{navLinks
						.filter((link) => !link.isBrand)
						.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="relative transition-colors duration-300"
								>
									<span className="hover:underline relative">
										{link.label}
										<span
											className={`absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-all duration-300 ${
												currentPath === link.href
													? "opacity-100 scale-x-100"
													: "opacity-0 scale-x-0"
											}`}
											style={{
												transformOrigin: "left",
												transitionProperty: "opacity, transform",
												transform:
													currentPath === link.href ? "scaleX(1)" : "scaleX(0)",
											}}
											aria-hidden="true"
										/>
									</span>
								</a>
							</li>
						))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
