<script lang="ts">
    import { TabItem } from 'flowbite-svelte'
    import {
        UserCircleSolid,
        AdjustmentsVerticalSolid,
        BugSolid
    } from 'flowbite-svelte-icons'

    import Home from './Home.svelte'
    import Setting from './Setting.svelte'
    import Bug_report from './Bug_report.svelte'
    export let button_name: string, button_key: string
</script>

<TabItem open>
    <div slot="title" class="flex items-center gap-2">
        {#if button_key === `UserCircleSolid`}
            <UserCircleSolid size="md" />
        {:else if button_key === `AdjustmentsVerticalSolid`}
            <AdjustmentsVerticalSolid size="md" />
        {:else if button_key === `BugSolid`}
            <BugSolid size="md" />
        {/if}
        {button_name}
    </div>
    <p class="dark:text-gray-400 text-sm text-gray-500">
        {#if button_key === `UserCircleSolid`}
            <Home />
        {:else if button_key === `AdjustmentsVerticalSolid`}
            <Setting />
        {:else if button_key === `BugSolid`}
            <Bug_report />
        {/if}
    </p>
</TabItem>
