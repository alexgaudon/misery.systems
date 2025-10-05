import { type MouseEventHandler, useRef, useState } from "react";

interface PreviewProps {
	src: string;
	alt?: string;
	zoom?: number; // how much to scale up
}

const Preview = ({ src, alt = "Preview", zoom = 2 }: PreviewProps) => {
	const [hover, setHover] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [containerSize, setContainerSize] = useState({
		width: 256,
		height: 256,
	});
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: MouseEvent) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;
		setContainerSize({ width: rect.width, height: rect.height });
		setPosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<div
			ref={containerRef}
			className="relative inline-block overflow-hidden group"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onMouseMove={
				handleMouseMove as unknown as MouseEventHandler<HTMLDivElement>
			}
		>
			<img
				src={src}
				alt={alt}
				className="w-5 h-5 group-hover:w-24 group-hover:h-24 object-cover rounded-2xl shadow-md transition-all duration-200 ease-out"
			/>

			{hover && (
				<div
					className="absolute pointer-events-none border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg"
					style={{
						top: position.y - 100,
						left: position.x + 20,
						width: "200px",
						height: "200px",
						backgroundImage: `url(${src})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: `${zoom * 100}%`,
						backgroundPosition: `${(position.x / containerSize.width) * 100}% ${(position.y / containerSize.height) * 100}%`,
						transition: "opacity 0.1s ease-in-out",
						zIndex: 50,
					}}
				/>
			)}
		</div>
	);
};

export default Preview;
