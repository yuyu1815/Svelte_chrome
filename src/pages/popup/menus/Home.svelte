<script lang="ts">
    // ボタンの各状態
    import Create_Button from './UI_Template/Create_Button.svelte'
    import Save_Button from './UI_Template/Create_Button_Save.svelte'
</script>

<div>
    <Create_Button
        input_name="拡張タグ追加"
        button_name="button1"
        input_explanation="拡張タグ追加" />
    <Create_Button
        input_name="旧名に変更"
        button_name="button2"
        input_explanation="変更される前の名前に戻ります" />
    <Create_Button
        input_name="詳細検索"
        button_name="button3"
        input_explanation="詳細検索画面でのEXタグのを表示するかどうか" />
    <Save_Button />
</div>

