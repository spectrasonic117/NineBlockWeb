<script>
	const { _card_img, _card_title, _card_desc } = $props();
</script>

<div
	class="w-80 flex justify-center items-center flex-col rounded-xl bg-slate-500/10 p-4 text-center border-solid border-slate-400 border-2"
>
	<img src={_card_img} alt="code" class="w-full h-32 rounded-2xl mb-4" />
	<h3 class="font-bold text-xl">{_card_title}</h3>
</div>
