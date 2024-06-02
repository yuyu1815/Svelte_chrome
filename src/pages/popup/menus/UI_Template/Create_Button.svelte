<script lang="ts">
    import { Toggle } from 'flowbite-svelte'

    import Question from './Create_Question.svelte'
    import { default_buttonsState, buttonsState } from './store'

    // ボタンの各状態 : json参照
    const localButtonsState = localStorage.getItem('Key')
    if (localButtonsState === null) {
        buttonsState.set(default_buttonsState)
    } else {
        buttonsState.set(JSON.parse(localButtonsState))
    }

    // 各ボタンの変更
    function toggleButton(buttonKey: keyof typeof default_buttonsState) {
        buttonsState.update(state => {
            state[buttonKey] = !state[buttonKey]
            localStorage.setItem('Key', JSON.stringify(state))
            return state
        })
    }

    export let input_name = ''
    export let button_name = ''
    export let input_explanation = ''
</script>

<div>
    <Toggle
        size="large"
        on:click={() => toggleButton(button_name)}
        checked={$buttonsState[button_name]}>
        <Question tooltipText={input_explanation} />{input_name}
    </Toggle>
    <br />
</div>
