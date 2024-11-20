<script>
	import Cards_Entry from "@svelte/comps/Cards_Entry.svelte";
</script>

<section
	class="w-full h-full md:w-5/6 text-white text-center flex justify-center items-center flex-col my-8"
>
	<h2 class="text-5xl font-bold md:text-5xl mb-10">
		Algunas <span class=" text-brain-freeze-400 text-bold"
			>Experiencias</span
		>
	</h2>
	<div class="mt-4 flex justify-center items-center flex-wrap gap-4">
		<Cards_Entry
			_card_img="/screenshots/cheesefest.png"
			_card_title="CheeseFest"
		/>
		<Cards_Entry
			_card_img="/screenshots/penitencia.png"
			_card_title="Penitencia"
		/>
		<Cards_Entry
			_card_img="/screenshots/dedcraft.png"
			_card_title="Dedcraft"
		/>
		<Cards_Entry
			_card_img="/screenshots/hormigeo.png"
			_card_title="Hormigeo"
		/>
		<Cards_Entry
			_card_img="/screenshots/speedrun.png"
			_card_title="Speedrun"
		/>
	</div>
</section>
