<script>
	const { _service_img, _service_title, _service_desc } = $props();
</script>

<div
	class="w-40 h-72 md:w-80 md:h-80 flex justify-center items-center flex-col rounded-xl bg-brain-freeze-500/10 p-4 text-center border-dotted border-brain-freeze-600 border-2"
>
	<img
		src={_service_img}
		alt="code"
		class="w-10 md:w-20 h-10 md:h-20 rounded-full bg-brain-freeze-300 p-2 md:p-4 mb-4 overflow-visible"
	/>
	<h3 class="font-bold text-base">{_service_title}</h3>
	<p class="mt-4 text-base text-balance">
		{_service_desc}
	</p>
</div>
