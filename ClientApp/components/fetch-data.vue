<template>
    <div>
        <h1>Weather forecast</h1>

        <p>This component demonstrates fetching data from the server.</p>

        <p v-if="!customers"><em>Loading...</em></p>

        <div class="table" v-if="customers">
            <kendo-grid
            :data-source="customers"
            :sortable='true'
            :filterable='true'
            :editable="'inline'"
            @save="onSave"
            @remove="onRemove">
                <kendo-grid-column field="dateFormatted" :width="140"></kendo-grid-column>
                <kendo-grid-column field="temperatureC"></kendo-grid-column>
                <kendo-grid-column :filterable='{multi: true, search: true}' field="summary" title="Unit Price" :width="120"></kendo-grid-column>
                <kendo-grid-column field="temperatureF" title="Units In Stock" :width="120"></kendo-grid-column>
                <kendo-grid-column :command="['edit', 'destroy']"></kendo-grid-column>
            </kendo-grid>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            forecasts: null
        }
    },

    computed: {
      customers () {
        return new kendo.data.DataSource ({
          data: this.$store.state.customers
        })
      }
    },

    methods: {
        onSave (ev) {
            this.$store.commit('edit', ev.model.toJSON())
        },
        onRemove (ev) {
            this.$store.commit('remove', ev.row)
        }
    },

    async created() {
        // ES2017 async/await syntax via babel-plugin-transform-async-to-generator
        // TypeScript can also transpile async/await down to ES5
        try {
            await this.$store.dispatch("fetch")
        } catch (error) {
            console.log(error)
        }
        // Old promise-based approach
        //this.$http
        //    .get('/api/SampleData/WeatherForecasts')
        //    .then(response => {
        //        console.log(response.data)
        //        this.forecasts = response.data
        //    })
        //    .catch((error) => console.log(error))*/
    }
}
</script>

<style>
</style>
