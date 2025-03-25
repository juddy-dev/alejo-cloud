<script>
    /* IMPORTS */
    import "../global.css";
        
    /* EXPORTS */
    export let data;
    
    /* LOGIC */

</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<div class="main-container">
    <slot />  
</div>
