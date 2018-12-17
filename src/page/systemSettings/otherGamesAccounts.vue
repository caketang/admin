<template>
    <div id="otherGamesAccounts">
        <el-col class="cont">
            <el-col class="mb10">
                <span>{{LANG['游戏后台帐号列表'] || '游戏后台帐号列表'}}</span>
            </el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :pageSet="false"
                    :showRefresh="false">
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    export default {
        data() {
            return {
                LANG,
                columnsUrl: "",
                tableUrl: ""
            }
        },
        methods: {
            init() {
                this.tableUrl = URL.api + '/system/games/backend';
                this.columnsUrl = "/static/json/systemSettings/otherGamesAccounts/columns.json";
            }
        },
        components: {
            tablegrid: tableGrid
        },
        computed: {},
        watch: {},
        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style scopend>
    .cont {background-color: #ffffff;padding: 10px;}
</style>