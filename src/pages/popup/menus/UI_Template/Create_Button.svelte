<script lang="ts">
    import { Toggle } from 'flowbite-svelte'
    import { onMount } from 'svelte'

    import Question from './Create_Question.svelte'
    // ボタンの各状態 : json参照
    let buttonsState = {
        button1: false,
        button2: false,
        button3: false
    }

    // ローカルストレージから状態を取得する非同期関数
    async function loadButtonsState() {
        const result = await chrome.storage.local.get('buttonsState')
        // ポップアップ
        alert(result.buttonsState)
        if (result.buttonsState) {
            buttonsState = result.buttonsState
        }
    }

    // コンポーネントのマウント時に状態を読み込む
    onMount(() => {
        loadButtonsState()
    })

    // 各ボタンの変更
    function toggleButton(buttonKey: keyof typeof buttonsState) {
        buttonsState[buttonKey] = !buttonsState[buttonKey]
        chrome.storage.local.set({ buttonsState })
    }

    // eslint-disable-next-line one-var,import/no-mutable-exports
    export let input_name = ''
    export let button_name = ''
    export let input_explanation = ''
</script>

<div>
    <Toggle
        size="large"
        on:click={() => toggleButton(button_name)}
        checked={buttonsState[button_name]}>
        <Question tooltipText={input_explanation} />{input_name}
    </Toggle>
    <br />
</div>
