<script>
	import Service_Entry from "@svelte/comps/Service_Entry.svelte";
</script>

<section
	class="w-full md:w-5/6 text-white text-center flex justify-center items-center flex-col"
>
	<h2 class="text-5xl font-bold md:text-5xl mb-16">
		¿Que <span class=" text-brain-freeze-400 text-bold">Servicios</span> ofrecemos?
	</h2>

	<div class="mt-4 flex justify-center items-center flex-wrap gap-4">
		<Service_Entry
			_service_img="/images/code.svg"
			_service_title="Plugin Development"
			_service_desc="Programación y desarrollo de plugins en PaperMC y Spigot"
		/>
		<Service_Entry
			_service_img="/images/servidores.svg"
			_service_title="Servidores Personalizados"
			_service_desc="Creamos el servior personalizado y optimizado para tu Evento ó Serie"
		/>
		<Service_Entry
			_service_img="/images/gear.svg"
			_service_title="Configuración"
			_service_desc="Creamos la configuración para plugins segun las necesidades"
		/>
		<Service_Entry
			_service_img="/images/asistencia.svg"
			_service_title="Asistencia"
			_service_desc="Te ayudamos a resolver problemas y resolver dudas"
		/>
		<Service_Entry
			_service_img="/images/traduccion.svg"
			_service_title="Traducciones"
			_service_desc="Traduccion de Plugins en el Servidor"
		/>
	</div>
</section>
