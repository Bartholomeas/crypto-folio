function Loader() {
	return (
		<div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-sm rounded-full bg-slate-100 p-xs">
			<span className=" top-[50%] left-[50%] w-[40px] h-[40px] rounded-full border-[6px] border-t-accent z-[100000] animate-spin" />
			<p className="text-base-content font-semibold text-sm">Loading..</p>
		</div>
	);
}

export default Loader;
