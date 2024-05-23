<script lang="ts">
    // ボタンの各状態
    import { Toggle } from 'flowbite-svelte'
    import Cerate_Button from './Create_Button.svelte'
    import Create_Button from "~pages/popup/menus/Create_Button.svelte";


</script>
<Cerate_Button input_name="拡張タグ追加" button_name="button1" input_explanation="拡張タグ追加"/>
<Cerate_Button input_name="旧名に変更" button_name="button2" input_explanation="変更される前の名前に戻ります"/>
<Create_Button input_name="詳細検索" button_name="button3" input_explanation="詳細検索画面でのEXタグのを表示するかどうか" />
