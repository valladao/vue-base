<template>
	<!-- Financial TerraCotta Application -->
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			app
		>
			<v-list-item to="/">
				<v-list-item-content>
					<v-list-item-title>Link 1</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item to="/about">
				<v-list-item-content>
					<v-list-item-title>Link 2</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-navigation-drawer>
		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>
		<v-main>
			<v-container fluid>
				<router-view/>
			</v-container>
		</v-main>
		<v-footer app></v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: true
	})
}
</script>