<script>

    export let date = '';
    export let picture = undefined;
    export let title = '';
    export let subtitle = '';

</script>

<style>
    .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .info {
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 2rem;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 0.5rem;
    }


</style>

<div class="item">
    <div class="info">
        {#if (picture)}
            <img src={picture} alt="imagen de la entidad" />
        {:else}
            <span class="material-symbols-outlined">source_environment</span>
        {/if}
        <div class="description">
            <p class="title">{title}</p>
            <p class="subtitle">{subtitle}</p>
        </div>
    </div>
    <p class="date">{date}</p>
</div>