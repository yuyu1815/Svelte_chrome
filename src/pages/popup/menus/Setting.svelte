<script lang="ts">
    // ボタンの各状態
    import { Checkbox, Toggle } from "flowbite-svelte";

    const buttonsState: {
        button1: boolean
        button2: boolean
        button3: boolean
    } = {
        button1: false,
        button2: false,
        button3: false
    }

    const buttons_state_switch: { button1: number; button1_name: string } = {
        button1: 0,
        button1_name: '漢字、ひら、カナ'
    }
    // 各ボタンの変更
    function toggleButton(buttonKey: keyof typeof buttonsState) {
        buttonsState[buttonKey] = !buttonsState[buttonKey]
    }
    // 各ボタンの変更
    function toggle_button_switch(buttonKey: keyof typeof buttons_state_switch) {
        buttons_state_switch[buttonKey]++
        if (buttons_state_switch[buttonKey] === 3)
            buttons_state_switch[buttonKey] = 0
        toggle_button_switch_name(buttonKey)
    }
    // ボタン名の変更
    function toggle_button_switch_name(
        button: keyof typeof buttons_state_switch
    ) {
        switch (buttons_state_switch[button]) {
            case 0:
                buttons_state_switch.button1_name = '漢字、ひら、カナ'
                break
            case 1:
                buttons_state_switch.button1_name = '漢字'
                break
            case 2:
                buttons_state_switch.button1_name = 'Off'
                break
        }
    }
</script>
<Toggle size="large" on:click={() => toggleButton('button1')}>拡張タグ追加</Toggle>

<Toggle size="large" on:click={() => toggleButton('button2')}>旧名に変更</Toggle>

<Toggle size="large" on:click={() => toggleButton('button3')}>詳細検索</Toggle>

<style>
    @import './template.css';
</style>
