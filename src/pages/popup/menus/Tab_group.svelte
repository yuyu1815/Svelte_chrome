<script lang="ts">
    import { Tabs } from 'flowbite-svelte' // インポートの修正: Toggleは削除
    // UI 統括
    import Create_Button_Group from './Create_Button_Group.svelte'
</script>

<Tabs tabStyle="underline">
    <Create_Button_Group button_key="BugSolid" button_name="報告" />
    <Create_Button_Group button_key="AdjustmentsVerticalSolid" button_name="設定" />
    <Create_Button_Group button_key="UserCircleSolid" button_name="ホーム" />
</Tabs>
