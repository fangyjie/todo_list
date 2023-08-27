<template>
	<ul class="todo-main">
		<MyItem
			v-for="task in tasks"
			:key="task.id"
			:title="task.title"
			:done="task.done"
		></MyItem>
	</ul>
</template>

<script>
	import { reactive } from "vue";
	import MyItem from "./MyItem.vue";

	export default {
		name: "MyList",
		components: {
			MyItem,
		},
		setup() {
			let tasks = reactive([
				{ id: "001", title: "打代码", done: false },
				{ id: "002", title: "睡觉", done: false },
				{ id: "003", title: "吃饭", done: false },
			]);

			return { tasks };
		},
	};
</script>

<style scoped>
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
