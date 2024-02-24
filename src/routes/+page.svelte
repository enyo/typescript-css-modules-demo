<script lang="ts">
  import button from "$lib/button.module.css";

  button.danger; // No intellisense here
  button.nonExisting;
</script>

<!-- No autocompletion here -->
<button class={button.danger}>Danger</button>
<button class={button.primary}>Primary</button>
