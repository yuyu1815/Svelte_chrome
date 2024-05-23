<script lang="ts">
    import { QuestionCircleSolid } from 'flowbite-svelte-icons'

    let showTooltip = false
    // eslint-disable-next-line import/no-mutable-exports
    export let tooltipText = ''
</script>

<div
    class="tooltip"
    on:mouseenter={() => (showTooltip = true)}
    on:mouseleave={() => (showTooltip = false)}
    role="tooltip">
    <QuestionCircleSolid size="md" />
    {#if showTooltip}
        <div class="tooltip-text">{tooltipText}</div>
    {/if}
</div>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip-text {
        visibility: hidden;
        width: 200px;
        background-color: #3c3c3c;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 100%;
        margin-left: -100px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }
</style>
