<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import LOGO from '$lib/assets/Clone.png';

	import InputField from '$lib/components/ui/inputField/inputField.svelte';
</script>

<div class="px-32 py-8 flex items-center">
	<img src={LOGO} alt="logo" />
	<InputField placeholder="Search by category" />
	<div class="flex gap-5 ml-20">
		<Button variant="outline">Nostr login</Button>
		<Button>Create your project</Button>
	</div>
</div>
