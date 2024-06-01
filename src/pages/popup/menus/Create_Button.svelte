<script lang="ts">
    import { Toggle } from 'flowbite-svelte'

    import Question from './Create_Question.svelte'
    // ボタンの各状態 : json参照
    let buttonsState: {
        button1: boolean
        button2: boolean
        button3: boolean
    } = { button1: false, button2: false, button3: false }
    // 各ボタンの変更
    function toggleButton(buttonKey: keyof typeof buttonsState) {
        buttonsState[buttonKey] = !buttonsState[buttonKey]
    }

    // eslint-disable-next-line one-var,import/no-mutable-exports
    export let input_name = '',
        button_name = '',
        input_explanation = ''
</script>

<Toggle
    size="large"
    on:click={() => toggleButton(button_name)}
    checked={buttonsState[button_name]}
    ><Question tooltipText={input_explanation} />{input_name}</Toggle>
<br />
