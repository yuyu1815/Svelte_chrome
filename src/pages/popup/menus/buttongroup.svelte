<script lang="ts">
    import { Tabs, TabItem } from 'flowbite-svelte' // インポートの修正: Toggleは削除
    import {
        UserCircleSolid,
        AdjustmentsVerticalSolid,
        BugSolid
    } from 'flowbite-svelte-icons'

    // 各種UI
    import Bug_report from './Bug_report.svelte'
    import Home from './Home.svelte'
    import Setting from './Setting.svelte'
</script>

<Tabs tabStyle="underline">
    <TabItem open>
        <div slot="title" class="flex items-center gap-2">
            <UserCircleSolid size="md" />
            ホーム
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <Home />
        </p>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <AdjustmentsVerticalSolid size="md" />
            設定
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <Setting />
        </p>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <BugSolid size="md" />
            報告
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <Bug_report />
        </p>
    </TabItem>
</Tabs>

<style>
    @import './template.css';
</style>
